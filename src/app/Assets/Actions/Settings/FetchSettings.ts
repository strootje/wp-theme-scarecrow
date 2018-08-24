import * as Redux from 'redux';
import { ApolloClient } from 'apollo-client';

import { WP_FetchSettings } from 'Entities/Wordpress/WP_FetchSettings';
const FetchSettingsQuery = require('Queries/Wordpress/FetchSettingsQuery');
import SettingsMapper from 'Mappers/Wordpress/SettingsMapper';
import Settings, { ISettings } from 'Models/Settings';

enum Actions {
	Request = 'FETCH_SETTINGS__REQUEST',
	Result = 'FETCH_SETTINGS__RESULT',
	Error = 'FETCH_SETTINGS__ERROR'
};

export interface FetchSettingsState extends ISettings {
	loading: boolean
};

export type FetchSettingsAction =
	| { type: Actions.Request }
	| { type: Actions.Result, settings: Settings }
	| { type: Actions.Error, error: Error };

const Request = () => ({ type: Actions.Request });
const Result = ( settings: Settings ) => ({ type: Actions.Result, settings });
const ErrorHandler = ( error: Error ) => ({ type: Actions.Error, error });

export function FetchSettings() {
	return ( dispatch: Redux.Dispatch, getState: () => any, client: ApolloClient<{}> ) => {
		dispatch(Request());

		client.query<WP_FetchSettings>({ query: FetchSettingsQuery }).then(
			({ data: { allSettings }}) => dispatch(Result(SettingsMapper.Map(allSettings))),
			( error ) => dispatch(ErrorHandler(error))
		);
	}
};

export function FetchSettingsReducer( state: FetchSettingsState, action: FetchSettingsAction ): FetchSettingsState {
	switch (action.type) {
		case Actions.Request: return { ...state, loading: true };
		case Actions.Result: return { ...state, loading: false, ...action.settings.ToObject };
		case Actions.Error: return { ...state, loading: false };
		default: return state;
	}
};
