var React = require('react');

var App = function(props) {
	return (
		<div>
			<h2>
				Mailbox
			</h2>
			<div>
				{props.children}
			</div>
		</div>	
	);
};

module.exports = App;