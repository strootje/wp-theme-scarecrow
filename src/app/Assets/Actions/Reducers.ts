import { combineReducers } from 'redux';
import { ViewDataReducer } from './ViewData';
import { TagsReducer } from './Tags';

export default combineReducers({
	ViewData: ViewDataReducer,
	Tags: TagsReducer
});
