import AppHeaderView from './view';
import AppHeaderStyle from './style';

import { compose } from 'redux';
import { connect } from 'preact-redux';

const mapState = ({ state: { menus, info: { baseurl }}}) => ({
	styles: AppHeaderStyle,
	baseUrl: baseurl,
	menu: menus.header
});

const mapDispatch = ( dispatch ) => ({
});

export default compose(
	connect(mapState, mapDispatch)
)(AppHeaderView);
