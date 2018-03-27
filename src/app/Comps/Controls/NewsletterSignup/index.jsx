import NewsletterSignupView from './view';
import NewsletterSignupStyle from './style';
import { Subscribe } from 'Assets/Actions/Newsletter';

import { compose } from 'redux';
import { connect } from 'preact-redux';

const mapState = ({ state }) => ({
	styles: NewsletterSignupStyle,
});

const mapDispatch = ( dispatch ) => ({
	signup: ( email, member ) => dispatch(Subscribe(email, member))
});

export default compose(
	connect(mapState, mapDispatch)
)(NewsletterSignupView);
