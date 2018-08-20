import * as Redux from 'redux';
import { ApolloClient } from 'apollo-client';
import gql from "graphql-tag";

import { MenuLocation } from 'Entities/Wordpress/globalTypes';
import { GetMenuByLocation } from 'Entities/Wordpress/GetMenuByLocation';
import MenuMapper from 'Mappers/Wordpress/MenuMapper';
import Menu from 'Models/Menu';

const MENU_FETCH_REQUEST = 'MENU_FETCH_REQUEST';
const MENU_FETCH_SUCCESS = 'MENU_FETCH_SUCCESS';
const MENU_FETCH_FAILURE = 'MENU_FETCH_FAILURE';

export interface FetchMenuState {
	loading: boolean,
	header?: Menu,
	sidebar?: Menu,
	footer?: Menu
}

type Request = { location: MenuLocation };
type Success = { menu: Menu };
type Failure = { error: Error };
type RequestAction = ({ type: 'MENU_FETCH_REQUEST' } & Request);
type SuccessAction = ({ type: 'MENU_FETCH_SUCCESS' } & Request & Success);
type FailureAction = ({ type: 'MENU_FETCH_FAILURE' } & Request & Failure);
export type FetchMenuAction = (RequestAction) | (SuccessAction) | (FailureAction);

const FetchMenuRequest = ( location: MenuLocation ) => ({ type: MENU_FETCH_REQUEST, location });
const FetchMenuSuccess = ( location: MenuLocation, menu: Menu ) => ({ type: MENU_FETCH_SUCCESS, location, menu });
const FetchMenuFailure = ( location: MenuLocation, error: Error ) => ({ type: MENU_FETCH_FAILURE, location, error });

export function FetchMenu( location: MenuLocation ) {
	return ( dispatch: Redux.Dispatch, getState: any, client: ApolloClient<{}> ) => {
		dispatch(FetchMenuRequest(location));

		client.query<GetMenuByLocation>({
			query: gql`query GetMenuByLocation($location: MenuLocation!) {
				menus(first: 1, where: { location: $location }) {
					nodes {
						id
						name
						menuItems {
							nodes {
								id
								label
								url
								target
								cssClasses
							}
						}
					}
				}
			}`,
			variables: {
				location: location
			}
		}).then(
			( data ) => dispatch(FetchMenuSuccess(location, MenuMapper.Map((data.data as any).menus.nodes[0])))
		).catch(
			( error: Error ) => dispatch(FetchMenuFailure(location, error))
		)
	}
}


export function FetchMenuReducer( state: FetchMenuState, action: FetchMenuAction ): FetchMenuState {
	switch (action.type) {
		case MENU_FETCH_REQUEST:
			return {
				...state,
				loading: true
			};

		case MENU_FETCH_SUCCESS:
			return {
				...state,
				loading: false,
				[action.location.toLowerCase()]: action.menu
			};

		case MENU_FETCH_FAILURE:
			return {
				...state,
				loading: false
			};

		default:
			return state;
	}
}
