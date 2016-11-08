var React = require('react');
var router = require('react-router');

var Link = router.Link;

var SpamMail = require('./spam-mail');

var SpamList = function(props) {
	console.log(props);
	var emails = Object.keys(props.spam).map(function(emailId, index) {
		var email = props.spam[emailId];
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