import PagePostsView from './view';
import PagePostsStyle from './style';

import { compose } from 'redux';
import { connect } from 'preact-redux';

const mapState = ({ store: { posts } }) => ({
	styles: PagePostsStyle
});

const mapDispatch = ( dispatch, getState ) => ({
});

export default compose(
	connect(mapState, mapDispatch)
)(PagePostsView);
