import * as Redux from 'redux';
import { ApolloClient } from 'apollo-client';
import gql from "graphql-tag";

import { MenuLocation } from 'Entities/Wordpress/globalTypes';
import { FetchMenuByLocation } from 'Entities/Wordpress/FetchMenuByLocation';
import MenuMapper from 'Mappers/Wordpress/MenuMapper';
import Menu from 'Models/Menu';

const MENUBYLOCATION_FETCH_REQUEST = 'MENUBYLOCATION_FETCH_REQUEST';
const MENUBYLOCATION_FETCH_SUCCESS = 'MENUBYLOCATION_FETCH_SUCCESS';
const MENUBYLOCATION_FETCH_FAILURE = 'MENUBYLOCATION_FETCH_FAILURE';

export interface FetchMenuByLocationState {
	loading: boolean,
	header?: Menu,
	sidebar?: Menu,
	footer?: Menu
}

type Request = { location: MenuLocation };
type Success = { menu: Menu };
type Failure = { error: Error };
type RequestAction = ({ type: 'MENUBYLOCATION_FETCH_REQUEST' } & Request);
type SuccessAction = ({ type: 'MENUBYLOCATION_FETCH_SUCCESS' } & Request & Success);
type FailureAction = ({ type: 'MENUBYLOCATION_FETCH_FAILURE' } & Request & Failure);
export type FetchMenuByLocationAction = (RequestAction) | (SuccessAction) | (FailureAction);

const FetchMenuByLocationRequest = ( location: MenuLocation ) => ({ type: MENUBYLOCATION_FETCH_REQUEST, location });
const FetchMenuByLocationSuccess = ( location: MenuLocation, menu: Menu ) => ({ type: MENUBYLOCATION_FETCH_SUCCESS, location, menu });
const FetchMenuByLocationFailure = ( location: MenuLocation, error: Error ) => ({ type: MENUBYLOCATION_FETCH_FAILURE, location, error });

export function FetchMenuByLocation( location: MenuLocation ) {
	return ( dispatch: Redux.Dispatch, getState: any, client: ApolloClient<{}> ) => {
		dispatch(FetchMenuByLocationRequest(location));

		client.query<FetchMenuByLocation>({
			query: gql`query FetchMenuByLocation($location: MenuLocation!) {
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
			( data ) => dispatch(FetchMenuByLocationSuccess(location, MenuMapper.Map((data.data as any).menus.nodes[0])))
		).catch(
			( error: Error ) => dispatch(FetchMenuByLocationFailure(location, error))
		)
	}
}


export function FetchMenuByLocationReducer( state: FetchMenuByLocationState, action: FetchMenuByLocationAction ): FetchMenuByLocationState {
	switch (action.type) {
		case MENUBYLOCATION_FETCH_REQUEST:
			return {
				...state,
				loading: true
			};

		case MENUBYLOCATION_FETCH_SUCCESS:
			return {
				...state,
				loading: false,
				[action.location.toLowerCase()]: action.menu
			};

		case MENUBYLOCATION_FETCH_FAILURE:
			return {
				...state,
				loading: false
			};

		default:
			return state;
	}
}
