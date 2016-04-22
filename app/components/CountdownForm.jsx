var React = require('react');

var CountdownForm = React.createClass({
	onSubmit: function(event){
			event.preventDefault();
			var strSeconds = this.refs.seconds.value;
			
			if(strSeconds.match(/^[0-9]*$/)){
				this.refs.seconds.value = '';
				this.props.onSetCountdown(parseInt(strSeconds, 10));
			}
			
	},
			
	render: function(){
		
		return (
			<div>
				<form ref="form" onSubmit={this.onSubmit} className="coundown-form">
					<div>
						<input type="text" ref="seconds" placeholder="Enter Time In Seconds"/>
					</div>
					<div>
						<button className="expanded button">Start</button>
					</div>
				</form>
			</div>
		)
	}
});


module.exports = CountdownForm;