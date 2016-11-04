var React = require('react');
var router = require('react-router');

var Link = router.Link;

var SpamMail = function(props) {
    console.log(props.children.props);
    return (
        <div>
            <strong>
            	<Link to={'/spam/'} className="inbox">
            		{props.children.props.from}
            		<br></br>
                	{props.children.props.title}
                </Link>
            </strong>
        </div>
    );
};

module.exports = SpamMail;