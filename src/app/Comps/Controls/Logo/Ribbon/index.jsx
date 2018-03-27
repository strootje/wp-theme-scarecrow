import LogoView from './view';
import LogoStyle from './style';

import { compose } from 'redux';
import { connect } from 'preact-redux';

const mapState = ({ state: { mods } }) => ({
	styles: LogoStyle
});

const mapDispatch = ( dispatch ) => ({
});

export default compose(
	connect(mapState, mapDispatch)
)(LogoView);
