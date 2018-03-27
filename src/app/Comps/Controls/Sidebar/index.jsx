import SidebarView from './view';
import SidebarStyle from './style';

import { compose } from 'redux';
import { connect } from 'preact-redux';

const mapState = ({ state: { locales, menus, info: { support }}}) => ({
	styles: SidebarStyle,
	locale: locales.sidebar,
	support: support,
	menu: menus.sidebar
});

const mapDispatch = ( dispatch ) => ({
});

export default compose(
	connect(mapState, mapDispatch)
)(SidebarView);
