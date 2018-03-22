import ZoomImageView from './view';
import ZoomImageStyle from './style';

import { compose } from 'recompose';
import { connect } from 'preact-redux';

const mapState = ( state ) => ({
	styles: ZoomImageStyle,
});

const mapDispatch = ( dispatch ) => ({
});

export default compose(
	connect(mapState, mapDispatch)
)(ZoomImageView);
