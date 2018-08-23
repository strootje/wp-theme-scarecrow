import { combineReducers } from 'redux';
import { SettingsReducer, SettingsState, SettingsAction } from './Settings';
import { MenuReducer, MenuState, MenuAction } from './Menus';

export interface ViewDataState {
	settings: SettingsState
	menus: MenuState
};

export type ViewDataAction =
	| SettingsAction
	| MenuAction;

export const ViewDataReducer = combineReducers({
	settings: SettingsReducer,
	menus: MenuReducer
});
