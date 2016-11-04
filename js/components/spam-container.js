var React = require('react');

var EMAILS = require('../emails');
var SpamList = require('./spam-list');

var SpamContainer = function() {
    return (
    	<div>
    		<SpamList inbox={EMAILS.spam} />
    	</div>
    );
};

module.exports = SpamContainer;