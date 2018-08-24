import { combineReducers } from 'redux';

import { MenuReducer, MenuState, MenuAction } from './Menus';
import { PagesReducer, PagesState, PagesAction } from './Pages';
import { PostsReducer, PostsState, PostsAction } from './Posts';
import { SettingsReducer, SettingsState, SettingsAction } from './Settings';
import { TagsReducer, TagsState, TagsAction } from './Tags';

export type AppState =
	& MenuState
	& PagesState
	& PostsState
	& SettingsState
	& TagsState;

export type AppAction =
	| MenuAction
	| PagesAction
	| PostsAction
	| SettingsAction
	| TagsAction;

export const AppReducer = combineReducers({
	Menus: MenuReducer,
	Pages: PagesReducer,
	Posts: PostsReducer,
	Settings: SettingsReducer,
	Tags: TagsReducer
});
