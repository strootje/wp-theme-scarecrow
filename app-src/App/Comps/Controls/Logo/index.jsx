import LogoView from './view';
import LogoStyle from './style';

import { compose } from 'recompose';
import { connect } from 'preact-redux';

const mapState = ({ state: { info } }) => ({
	styles: LogoStyle,
	info: info
});

const mapDispatch = ( dispatch ) => ({
});

export default compose(
	connect(mapState, mapDispatch)
)(LogoView);
