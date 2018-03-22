import PagePostDetailsView from './view';
import PagePostDetailsStyle from './style';
import { FetchPostDetails } from 'Actions/Posts';

import { compose } from 'recompose';
import { connect } from 'preact-redux';

const mapState = ( state ) => ({
	styles: PagePostDetailsStyle
});

const mapDispatch = ( dispatch, getState ) => ({
	fetchPostDetails: ( postId ) => dispatch(FetchPostDetails(postId))
});

export default compose(
	connect(mapState, mapDispatch)
)(PagePostDetailsView);
