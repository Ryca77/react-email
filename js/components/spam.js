var React = require('react');

var EMAILS = require('../emails');
var email = require('.spam-mail');

var ShowSpamMail = function(props) {
	var email = EMAILS.inbox[props.params.emailId];
	return <Inbox id={email.id} title={email.title} from={email.from} to={email.to} content={email.content} />;
};

module.exports = ShowSpamMail;