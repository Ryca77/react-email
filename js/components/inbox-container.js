var React = require('react');

var EMAILS = require('../emails');
var InboxList = require('./inbox-list');

var InboxContainer = function() {
    return (
    	<div>
    		<InboxList inbox={EMAILS.inbox} />
    	</div>
    );
};

module.exports = InboxContainer;