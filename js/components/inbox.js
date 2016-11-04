var React = require('react');

var EMAILS = require('../emails');

var Inbox = function() {
	var email = EMAILS.inbox[this.props.params]
	console.log(email);
	return <Inbox id={email.id} title={email.title} from={email.from} to={email.to} content={email.content} />;
};

module.exports = Inbox;