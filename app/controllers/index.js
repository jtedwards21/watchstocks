

var apiKey = "KUytvHxeZzXQzvSzJkrC"
var ticker = "AAPL"
var date = "20160912"
var url = "https://www.quandl.com/api/v3/datatables/WIKI/PRICES.json?ticker=" + ticker + "&date=" + date + "&api_key=" + apiKey

//d3 Methods


//I can just test this method through the console
var drawGraph = function(url){

//This method should take cleaned data
var drawG = function(data){
d3.select('chart')
.selectAll("g")
.data(data)
.enter()
.attr("transform", function(d){return "translate(" + d.date + "," + d.price + ")"})
}

//Circles get drawn after G
var drawCircle = function(){}

}


//This class will be wrong, because it doesn't contain a widget for the ticker at the top
var WidgetContainer = React.createClass({

render(){
return <TickerWidget />
}
})

var DisplayWidget = React.createClass({
render(){
return(
<svg className="chart"></svg>
)
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
