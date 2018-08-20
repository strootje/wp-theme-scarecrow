import { combineReducers } from 'redux';
import { MenuReducer, MenuState, MenuAction } from './Menus';

export type ViewDataAction = MenuAction;
export interface ViewDataState {
	menus: MenuState
};

export const ViewDataReducer = combineReducers({
	menus: MenuReducer
});
