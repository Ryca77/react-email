var React = require('react');
var router = require('react-router');

var Link = router.Link;

var SpamMail = require('./spam-mail');

var SpamList = function(props) {
	var emails = Object.keys(props.inbox).map(function(emailId, index) {
		var email = props.inbox[emailId];
		console.log(email);
		return (
			<li key={index} className="spam-mails">
				<SpamMail>
					<Link to={'/spam'} id={email.id}
						  from={email.from}
						  title={email.title}>
					</Link>
				</SpamMail>
			</li>
		);
	});
	return (
		<ul>
			{emails}
		</ul>
	);
};

module.exports = SpamList;