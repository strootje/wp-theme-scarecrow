import SidebarView from './view';
import SidebarStyle from './style';

import { compose } from 'recompose';
import { connect } from 'preact-redux';

const mapState = ({ state: { menus, info: { support } } }) => ({
	styles: SidebarStyle,
	support: support,
	menu: menus.sidebar
});

const mapDispatch = ( dispatch ) => ({
});

export default compose(
	connect(mapState, mapDispatch)
)(SidebarView);
