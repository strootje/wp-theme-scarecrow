import { combineReducers } from 'redux';
import info from './Bloginfo';
import locales from './Locales';
import menus from './Menus';
import pages from './Pages';

export default combineReducers({
	info: info,
	locales: locales,
	menus: menus,
	pageIds: pages
});
