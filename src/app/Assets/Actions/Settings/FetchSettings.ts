import { AppState } from 'Actions/Reducers';
import SettingsMapper from 'Mappers/Wordpress/SettingsMapper';
import Settings, { ISettings } from 'Models/Settings';
import { WP_FetchSettings } from 'Queries/Wordpress/__generated__/WP_FetchSettings';
import { ApolloClient } from 'apollo-client';
import * as Redux from 'redux';

const FetchSettingsQuery = require('Queries/Wordpress/FetchSettingsQuery');
enum Actions {
	Request = 'FETCH_SETTINGS__REQUEST',
	Result = 'FETCH_SETTINGS__RESULT',
	Error = 'FETCH_SETTINGS__ERROR'
};

export interface FetchSettingsState extends ISettings {
};

export type FetchSettingsAction =
	| { type: Actions.Request }
	| { type: Actions.Result, settings: Settings }
	| { type: Actions.Error, error: Error };

const Request = () => ({ type: Actions.Request });
const Result = (settings: Settings) => ({ type: Actions.Result, settings });
const ErrorHandler = (error: Error) => ({ type: Actions.Error, error });

export function FetchSettings() {
	return async (dispatch: Redux.Dispatch, getState: () => AppState, client: ApolloClient<{}>) => {
		await dispatch(Request());

		try {
			const { data: { allSettings }} = await client.query<WP_FetchSettings>({
				query: FetchSettingsQuery
			});

			return await dispatch(Result(SettingsMapper.Map(allSettings)));
		} catch( error ) {
			return await dispatch(ErrorHandler(error));
		}
	}
};

export function FetchSettingsReducer(state: FetchSettingsState, action: FetchSettingsAction): FetchSettingsState {
	switch (action.type) {
		case Actions.Request: return { ...state };
		case Actions.Result: return { ...state, ...action.settings.ToObject };
		case Actions.Error: return { ...state };
		default: return state;
	}
};
