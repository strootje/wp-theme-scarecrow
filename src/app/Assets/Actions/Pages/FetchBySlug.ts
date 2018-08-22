import * as Redux from 'redux';
import { ApolloClient } from 'apollo-client';
import gql from "graphql-tag";

import Page from 'Models/Page';
import PageMapper from 'Mappers/Wordpress/PageMapper';
import { FetchPageByUri_pageBy } from 'Entities/Wordpress/FetchPageByUri';

const PAGEBYURI_FETCH_REQUEST = 'PAGEBYURI_FETCH_REQUEST';
const PAGEBYURI_FETCH_SUCCESS = 'PAGEBYURI_FETCH_SUCCESS';
const PAGEBYURI_FETCH_FAILURE = 'PAGEBYURI_FETCH_FAILURE';

export interface FetchPageByUriState {
	loading: boolean,
	pages: Page[]
}

type Request = { uri: string };
type Success = { page: Page };
type Failure = { error: Error };
type RequestAction = ({ type: 'PAGEBYURI_FETCH_REQUEST' } & Request);
type SuccessAction = ({ type: 'PAGEBYURI_FETCH_SUCCESS' } & Request & Success);
type FailureAction = ({ type: 'PAGEBYURI_FETCH_FAILURE' } & Request & Failure);
export type FetchPageByUriAction = (RequestAction) | (SuccessAction) | (FailureAction);

const FetchPageByUriRequest = ( uri: string ) => ({ type: PAGEBYURI_FETCH_REQUEST, uri });
const FetchPageByUriSuccess = ( uri: string, page: Page ) => ({ type: PAGEBYURI_FETCH_SUCCESS, uri, page });
const FetchPageByUriFailure = ( uri: string, error: Error ) => ({ type: PAGEBYURI_FETCH_FAILURE, uri, error });

export function FetchPageByUri( uri: string ) {
	return ( dispatch: Redux.Dispatch, getState: any, client: ApolloClient<{}> ) => {
		dispatch(FetchPageByUriRequest(uri));

		client.query<FetchPageByUri_pageBy>({
			query: gql`query FetchPageByUri( $pageUri: String! ) {
				pageBy( uri: $pageUri ) {
					id
					title
				}
			}`,
			variables: {
				pageUri: uri
			}
		}).then(
			( data ) => dispatch(FetchPageByUriSuccess(uri, PageMapper.Map((data.data as any).pageBy)))
		).catch(
			( error: Error ) => dispatch(FetchPageByUriFailure(uri, error))
		)
	}
}


export function FetchPageByUriReducer( state: FetchPageByUriState, action: FetchPageByUriAction ): FetchPageByUriState {
	switch (action.type) {
		case PAGEBYURI_FETCH_REQUEST:
			return {
				...state,
				loading: true
			};

		case PAGEBYURI_FETCH_SUCCESS:
			return {
				...state,
				loading: false,
				pages: [ ...state.pages, action.page ]
			};

		case PAGEBYURI_FETCH_FAILURE:
			return {
				...state,
				loading: false
			};

		default:
			return state;
	}
}
