var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
	it('should exist', () => {
		expect(Timer).toExist();
	});

	it('should start timer on started statue', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);

		timer.handleStatusChange('started');
		expect(timer.state.count).toBe(0);

		setTimeout(()=>{
			expect(timer.state.timerStatus).toBe('started');
			expect(timer.state.count).toBe(1);
			done();
		}, 1001);
	});

	it('should pause count on paused status', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);
		

		timer.setState({count: 1});
		timer.handleStatusChange('started');
		timer.handleStatusChange('paused');

		setTimeout(()=>{
			expect(timer.state.timerStatus).toBe('paused');
			expect(timer.state.count).toBe(1);
			done();

		},1001);
	});

	it('should set count to 0 on stopped status', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);

		timer.setState({count: 1});
		timer.handleStatusChange('started');
		timer.handleStatusChange('stopped');

		setTimeout(() => {
			expect(timer.state.timerStatus).toBe('stopped');
			expect(timer.state.count).toBe(0);
			done();
		}, 1001);
	});
});