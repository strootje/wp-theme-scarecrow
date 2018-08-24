import { FetchSettingsReducer, FetchSettingsState, FetchSettingsAction } from './FetchSettings';
import Settings from 'Models/Settings';

export type SettingsState = FetchSettingsState;
export type SettingsAction = FetchSettingsAction;

const reducers: (( state: SettingsState, action: SettingsAction ) => SettingsState)[] = [
	FetchSettingsReducer
];

const dstate: SettingsState = {
	loading: false,
	Title: '...',
	Description: '...',
	Url: '...',
	IsHomepageStatic: false,
	PageIdOnFront: 0,
	PageIdForPosts: 0
}

export function SettingsReducer( state: SettingsState = dstate, action: SettingsAction ): SettingsState {
	return reducers.reduce(( state, reducer ) => reducer(state, action), state);
}
