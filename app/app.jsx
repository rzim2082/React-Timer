var React = require('react');
var ReactDOM = require('react-dom');
//below is an example of destructuring
var {Route, Router, IndexRoute, hashHistory} =  require('react-router');
var Main = require('Main');
var Nav = require('Nav');



//Load foundation w loaders
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

require('style!css!sass!applicationStyles');


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>

		</Route>
	</Router>,
	document.getElementById('app')
);

