import ListView from './view';
import ListStyle from './style';

import { compose } from 'redux';
import { connect } from 'preact-redux';

const mapState = ( state ) => ({
	styles: ListStyle
});

const mapDispatch = ( dispatch ) => ({
});

export default compose(
	connect(mapState, mapDispatch)
)(ListView);
