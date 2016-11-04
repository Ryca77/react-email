var React = require('react');

var EMAILS = require('../emails');

var Inbox = function(props) {
	console.log(props.params.emailId);
	var emails = EMAILS.inbox
	var id = props.params.emailId;
	var emailTitle = emails[id].title;
	var emailFrom = emails[id].from;
	var emailTo = emails[id].to;
	var emailContent = emails[id].content;
	return (
		<div>
			{emailTitle}
			<br></br>
			{emailFrom}
			<br></br>
			{emailTo}
			<br></br>
			{emailContent}
		</div>
	);
};

module.exports = Inbox;