require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

var MailboxContainer = require('./components/mailbox-container');
var InboxContainer = require('./components/inbox-container');
var SpamContainer = require('./components/spam-container');
var Inbox = require('./components/inbox');
var Spam = require('./components/spam');

var App = require('./components/app');

var routes =  (
	<Router history={hashHistory}>
        <Route path="/" component={App}>
        	<IndexRoute component={MailboxContainer} />
        </Route>
        <Route path="/inbox" component={App}>
        	<IndexRoute component={InboxContainer} />
        	<Route path=":emailId" component={Inbox} />
        </Route>
        <Route path="/spam" component={App}>
        	<IndexRoute component={SpamContainer} />
        	<Route path=":emailId" component={Spam} />
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});