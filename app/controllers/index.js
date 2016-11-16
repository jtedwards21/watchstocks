
//I'll probably need a larger Margin on the bottom for the x axis that will come out
var margins = {
"top" = 5,
"left" = 5,
"right" = 5, 
"bottom" = 5
}

var starterStocks = ["AAPL", "GOOG"]

var width = 1000 - margins.left - margins.right
var height = 500 - margins.top - margins.bottom

var apiKey = "KUytvHxeZzXQzvSzJkrC"
var ticker = "AAPL"
var startDate = "20160912"
var endDate = "20161002"
var url = "https://www.quandl.com/api/v3/datatables/WIKI/PRICES.json?ticker=" + ticker + "&start_date=" + startDate + "&end_date=" + endDate + "&api_key=" + apiKey

//d3

//This call should eventually go into the React Section
d3.json(url, function(data){
data = data.datatable;
drawGraph(data)
})

var drawG = function(data, stockCode){
d3.select('#chart')
.selectAll("g")
.data(data)
.enter()
.attr("class", stockCode)
.attr("transform", function(d){return "translate(" + d.date + "," + d.price + ")"})
}

var drawCircle = function(stockCode){
d3.selectAll("g ." + stockCode)
.append("circle")
.attr("r", 2)
.style("fill", "black")
.style("stroke", "black")
.style("stroke-width", "1px")
}

//Don't forget to return this
var drawGraph = function(data){

var dateData = data.map(function(d){
return d[1]
})
var openData = data.map(function(d){
return d[2]
})
var data = = data.map(function(d){
return {"date": d[1], "price": d[2]}
})

//Get Maximum and Minimum Values for Scales

var maxPrice = d3.max(openData);
var minPrice = d3.min(openData);
//FIX
var minDate = new Date(dateData[0]);
var maxDate = new Date("2016-11-15");

var xScale = d3.scaleLinear().domain([minDate, maxDate]).range([0, width])
var xAxis = d3.axisBottom().scale(xScale).tickSize(0)
d3.select("chart").append("g").attr("id", "xAxisG").attr("transform", "translate(0," + height + ")").call(xAxis);

//This yScale is not useable, I might have to do something from the S&P and then some sort of percentage like they do
var yScale = d3.scaleLinear().domain([0, maxPrice]).range([0, height])
var yAxis = d3.axisRight().scale(yScale).tickSize(0)
d3.select("chart").append("g").attr("id", "yAxisG").attr("transform", "translate(-10,0)").call(yAxis)

return data
}



//REACT
//This container also handles drawing at the top of the page
var WidgetContainer = React.createClass({
getInitialState(){
return {stocks: ["AAPL"]}
},
componentDidMount(){
d3.select("chart")
.attr("width", width)
.attr("height". height);
},
render(){
return <TickerWidget />
}
})

var TickerWidget = React.createClass({
render(){
return(
<div className="ticker-widget">
<div className="ticker-name">MSFT</div>
<div className="close-button">x</div>
<div className="stock-info">Lipsum Orum</div>
</div>
)
}
})

var SelectorWidger = React.createClass({
render(){
return(
<div className="selector-widget">
<div className="select-title">Syncs in realtime across clients</div>
<form className="search-form">
<div className="input-group">
<input placeholder="Stock code"　/>
<button>Add</button>
</div>
</form>
<div className="search-error-message"></div>
</div>
)　
}
})

ReactDOM.render(
<WidgetContainer />,
document.getElementById('content')
)
