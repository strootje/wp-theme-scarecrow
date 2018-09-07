import * as Redux from 'redux';
import { ApolloClient } from 'apollo-client';

import { MenuLocation } from 'Entities/Wordpress/globalTypes';
import { WP_FetchMenuByLocation } from 'Entities/Wordpress/WP_FetchMenuByLocation';
const FetchMenuByLocationQuery = require('Queries/Wordpress/FetchMenuByLocationQuery');
import MenuMapper from 'Mappers/Wordpress/MenuMapper';
import Menu from 'Models/Menu';

enum Actions {
	Request = 'FETCH_MENU_BY_LOCATION__REQUEST',
	Result = 'FETCH_MENU_BY_LOCATION__RESULT',
	Error = 'FETCH_MENU_BY_LOCATION__ERROR'
};

export interface FetchMenuByLocationState {
	loading: boolean,
	header?: Menu,
	sidebar?: Menu,
	footer?: Menu,
	sitemap?: Menu
};

export type FetchMenuByLocationAction =
	| { type: Actions.Request, location: MenuLocation }
	| { type: Actions.Result, location: MenuLocation, menu: Menu }
	| { type: Actions.Error, location: MenuLocation, error: Error };

const Request = ( location: MenuLocation ) => ({ type: Actions.Request, location });
const Result = ( location: MenuLocation, menu: Menu ) => ({ type: Actions.Result, location, menu });
const ErrorHandler = ( location: MenuLocation, error: Error ) => ({ type: Actions.Error, location, error });

export function FetchMenuByLocation( location: MenuLocation ) {
	return ( dispatch: Redux.Dispatch, getState: () => any, client: ApolloClient<{}> ) => {
		dispatch(Request(location));

		client.query<WP_FetchMenuByLocation>({ query: FetchMenuByLocationQuery, variables: { location }}).then(
			({ data: { menus }}) => dispatch(Result(location, MenuMapper.MapSingle(menus))),
			( error ) => dispatch(ErrorHandler(location, error))
		);
	}
};

export function FetchMenuByLocationReducer( state: FetchMenuByLocationState, action: FetchMenuByLocationAction ): FetchMenuByLocationState {
	switch (action.type) {
		case Actions.Request: return { ...state, loading: true };
		case Actions.Result: return { ...state, loading: false, [action.location.toLowerCase()]: action.menu };
		case Actions.Error: return { ...state, loading: false };
		default: return state;
	}
};
