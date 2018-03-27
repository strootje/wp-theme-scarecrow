import LinkView from './view';
import LinkStyle from './style';

import { compose } from 'redux';
import { connect } from 'preact-redux';

const mapState = ( state ) => ({
	styles: LinkStyle
});

const mapDispatch = ( dispatch ) => ({
});

export default compose(
	connect(mapState, mapDispatch)
)(LinkView);
