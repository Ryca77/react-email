var React = require('react');
var router = require('react-router');

var Link = router.Link;

var InboxMail = function(props) {
    console.log(props.children.props);
    return (
        <div>
            <strong>
            	<Link to={'/inbox/'} className="inbox">
            		{props.children.props.from}
            		<br></br>
                	{props.children.props.title}
                </Link>
            </strong>
        </div>
    );
};

module.exports = InboxMail;