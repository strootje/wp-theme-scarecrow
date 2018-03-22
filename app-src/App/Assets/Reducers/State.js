import { combineReducers } from 'redux';
import BloginfoReducer from 'Assets/Reducers/States/Bloginfo';
import MenusReducer from 'Assets/Reducers/States/Menus';
import PagesReducer from 'Assets/Reducers/States/Pages';

export default combineReducers({
	info: BloginfoReducer,
	menus: MenusReducer,
	pageIds: PagesReducer
});
