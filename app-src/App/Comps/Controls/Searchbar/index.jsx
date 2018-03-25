import SearchbarView from './view';
import SearchbarStyle from './style';

import { compose } from 'redux';
import { connect } from 'preact-redux';

const mapState = ( state ) => ({
	styles: SearchbarStyle,
});

const mapDispatch = ( dispatch ) => ({
});

export default compose(
	connect(mapState, mapDispatch)
)(SearchbarView);
