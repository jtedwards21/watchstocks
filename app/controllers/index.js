var Chart = require('./../../public/lib/chart')
var defaultValues = require('./../../public/lib/chart')
//THere's nothing coming up in the development server for some reason.

var WidgetContainer = React.createClass({
getInitialState(){
return {stocks: this.props.stocks, maxPrice: 0}
},
componentDidMount(){
console.log(this.props)
d3.select("#chart")
.attr("width", this.props.width)
.attr("height". this.props.height);
console.log(this.props.height)
//Draw from the starterStocks
//Check for highest Price and Update a marker
for(var i = 0; i < this.props.stocks.length; i++){
url = makeUrl(this.props.stocks[i], this.props.startDate, this.props.endDate, this.props.apiKey)
console.log(url)
d3.json(url, function(data){
data = data.datatable;
//Now What Needs to Happen is that the x and y axis need to get pulled into their own methods
var dataDict = cleanData(data)
drawScales(dataDict)
})
}

},
render(){
//Return a ticker Widget for each starterStock
return (
<div>
<TickerWidget /> <SelectorWidget />
</div>
)
}
})

var TickerWidget = React.createClass({
render(){
return(
<div className="ticker-widget sub-widget">
<div className="ticker-name">MSFT</div>
<div className="close-button">x</div>
<div className="stock-info">Lipsum Orum</div>
</div>
)
}
})

var SelectorWidget = React.createClass({
render(){
return(
<div className="selector-widget sub-widget">
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

//Lets put the props in here
ReactDOM.render(
<WidgetContainer className="widget-container" apiKey={defaultValues.apiKey} startDate={defaultValues.startDate} endDate={defaultValues.endDate} width={defaultValues.width} height={defaultValues.height} stocks={defaultValues.starterStocks}/>,
document.getElementById('content')
)
