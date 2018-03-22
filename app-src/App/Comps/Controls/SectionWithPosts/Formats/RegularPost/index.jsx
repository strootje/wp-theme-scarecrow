import RegularPostView from './view';
import RegularPostStyle from './style';

import { compose } from 'recompose';
import { connect } from 'preact-redux';

const mapState = ( state ) => ({
	styles: RegularPostStyle
});

const mapDispatch = ( dispatch ) => ({
});

export default compose(
	connect(mapState, mapDispatch)
)(RegularPostView);
