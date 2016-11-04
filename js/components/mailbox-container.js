var React = require('react');
var router = require('react-router');

var Link = router.Link;

var MailboxContainer = function() {
    return (
    	<div>
    		<Link to="/inbox">
    		<h2>Inbox</h2>
    		</Link> 		
    		<Link to="/spam">
    		<h2>Spam</h2>
    		</Link>
    	</div>
    );
};

module.exports = MailboxContainer;