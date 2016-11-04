var React = require('react');

var EMAILS = require('../emails');
var Spam = require('./spam-mail');

var ShowSpamMail = function() {
	var email = EMAILS.inbox[props.params.emailId];
	return <Spam id={email.id} title={email.title} from={email.from} to={email.to} content={email.content} />;
};

module.exports = ShowSpamMail;