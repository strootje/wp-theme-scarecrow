import { combineReducers } from 'redux';

import { MenuAction, MenuReducer, MenuState } from './Menus';
import { PagesAction, PagesReducer, PagesState } from './Pages';
import { PostsAction, PostsReducer, PostsState } from './Posts';
import { SettingsAction, SettingsReducer, SettingsState } from './Settings';
import { TagsAction, TagsReducer, TagsState } from './Tags';

export type AppState = {
	Menus: MenuState,
	Pages: PagesState,
	Posts: PostsState,
	Settings: SettingsState,
	Tags: TagsState
};

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
