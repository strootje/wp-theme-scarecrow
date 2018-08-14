import { combineReducers } from 'redux';
import info from './Bloginfo';
import categories from './Categories';
import locales from './Locales';
import menus from './Menus';
import pages from './Pages';

export default combineReducers({
	info: info,
	categoryIds: categories,
	locales: locales,
	menus: menus,
	pageIds: pages
});
