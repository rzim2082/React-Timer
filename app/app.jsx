var React = require('react');
var ReactDOM = require('react-dom');
//below is an example of destructuring
var {Route, Router, IndexRoute, hashHistory} =  require('react-router');
var Main = require('Main');
var Nav = require('Nav');
var Timer = require('Timer');
var Countdown = require('Countdown');
var About = require('About');



//Load foundation w loaders
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

require('style!css!sass!applicationStyles');


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Timer}/>
			<Route path="/countdown" component={Countdown}/>
			<Route path="/about" component={About}/>

		</Route>
	</Router>,
	document.getElementById('app')
);

