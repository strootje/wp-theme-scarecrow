import { combineReducers } from 'redux';
import BloginfoReducer from 'Assets/Reducers/States/Bloginfo';
import LocalesReducer from 'Assets/Reducers/States/Locales';
import MenusReducer from 'Assets/Reducers/States/Menus';
import PagesReducer from 'Assets/Reducers/States/Pages';

export default combineReducers({
	info: BloginfoReducer,
	locales: LocalesReducer,
	menus: MenusReducer,
	pageIds: PagesReducer
});
