import SectionWithPostsView from './view';
import SectionWithPostsStyle from './style';
import { FetchPosts } from 'Assets/Actions/Posts';

import { compose } from 'recompose';
import { connect } from 'preact-redux';

const mapState = ({ store: { posts } }) => ({
	styles: SectionWithPostsStyle,
	posts: posts
});

const mapDispatch = ( dispatch ) => ({
	fetchPosts: (...args) => dispatch(FetchPosts(...args))
});

export default compose(
	connect(mapState, mapDispatch)
)(SectionWithPostsView);
