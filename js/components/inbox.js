var React = require('react');

var EMAILS = require('../emails');
var email = require('.inbox-mail');

var ShowInboxMail = function(props) {
	var email = EMAILS.inbox[props.params.emailId];
	console.log(email);
	return <Inbox id={email.id} title={email.title} from={email.from} to={email.to} content={email.content} />;
};

module.exports = ShowInboxMail;