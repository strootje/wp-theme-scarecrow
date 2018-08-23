import { combineReducers } from 'redux';

import { MenuReducer, MenuState, MenuAction } from './Menus';
import { PagesReducer, PagesState, PagesAction } from './Pages';
import { SettingsReducer, SettingsState, SettingsAction } from './Settings';
import { TagsReducer, TagsState, TagsAction } from './Tags';

export type AppState =
	& MenuState
	& PagesState
	& SettingsState
	& TagsState;

export type AppAction =
	| MenuAction
	| PagesAction
	| SettingsAction
	| TagsAction;

export const AppReducer = combineReducers({
	Menus: MenuReducer,
	Pages: PagesReducer,
	Settings: SettingsReducer,
	Tags: TagsReducer
});
