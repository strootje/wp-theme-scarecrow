import AppView from './view';
import AppStyle from './style';

import { compose } from 'redux';
import { connect } from 'preact-redux';

const mapState = ( state ) => ({
	styles: AppStyle
});

const mapDispatch = ( dispatch ) => ({
});

export default compose(
	connect(mapState, mapDispatch)
)(AppView);
