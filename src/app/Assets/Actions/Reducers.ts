import { combineReducers } from 'redux';
import { ViewDataReducer } from './ViewData';
import { TagsReducer } from './Tags';
import { PagesReducer } from './Pages';

export default combineReducers({
	ViewData: ViewDataReducer,
	Tags: TagsReducer,
	Pages: PagesReducer
});
