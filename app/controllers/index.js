var apiKey = "KUytvHxeZzXQzvSzJkrC"
var ticker = "AAPL"
var date = "20160912"
var url = "https://www.quandl.com/api/v3/datatables/WIKI/PRICES.json?ticker=" + ticker + "&date=" + date + "&api_key=" + apiKey

//Create React Classes and Initialize State for the widgets at the bottom




//This class will be wrong, because it doesn't contain a widget for the ticker at the top
var WidgetContainer = React.createClass({
render(){
return {<TickerWidget /> <TickerWidget /> <TickerWidget />}
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
<input placeholder="Stock code">
<button>Add</button>
</div>
</form>
<div className="search-error-message"></div>
</div>
)
}
})
