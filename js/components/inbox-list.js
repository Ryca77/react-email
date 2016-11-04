var React = require('react');
var router = require('react-router');

var Link = router.Link;

var InboxMail = require('./inbox-mail');

var InboxList = function(props) {
	var emails = Object.keys(props.inbox).map(function(emailId, index) {
		var email = props.inbox[emailId];
		console.log(email);
		return (
			<li key={index} className="inbox-mails">
				<InboxMail>
					<Link to={'/inbox'} id={email.id}
						  from={email.from}
						  title={email.title}>
					</Link>
				</InboxMail>
			</li>
		);
	});
	return (
		<ul>
			{emails}
		</ul>
	);
};

module.exports = InboxList;