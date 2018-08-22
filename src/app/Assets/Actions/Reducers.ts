import { combineReducers } from 'redux';
import { ViewDataReducer } from './ViewData';
import { TagsReducer, TagsState, TagsAction } from './Tags';
import { PagesReducer, PagesState, PagesAction } from './Pages';

export type AppState =
	& TagsState
	& PagesState;

export type AppAction =
	| TagsAction
	| PagesAction;

export const AppReducer = combineReducers({
	ViewData: ViewDataReducer,
	Tags: TagsReducer,
	Pages: PagesReducer
});
