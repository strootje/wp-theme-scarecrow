import FancyHeaderView from './view';
import FancyHeaderStyle from './style';

import { compose } from 'recompose';
import { connect } from 'preact-redux';

const mapState = ( state ) => ({
	styles: FancyHeaderStyle,
});

const mapDispatch = ( dispatch ) => ({
});

export default compose(
	connect(mapState, mapDispatch)
)(FancyHeaderView);
