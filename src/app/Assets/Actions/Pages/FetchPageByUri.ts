import * as Redux from 'redux';
import { ApolloClient } from 'apollo-client';
const FetchPageByUriQuery = require('Queries/Wordpress/FetchPageByUriQuery');
import { WP_FetchPageByUri } from 'Entities/Wordpress/WP_FetchPageByUri';
import PageMapper from 'Mappers/Wordpress/PageMapper';
import Page from 'Models/Page';

enum Actions {
	Request = 'FETCH_PAGE_BY_URI__REQUEST',
	Result = 'FETCH_PAGE_BY_URI__RESULT',
	Error = 'FETCH_PAGE_BY_URI__ERROR'
};

export interface FetchPageByUriState {
	loading: boolean,
	pages: Page[]
};

export type FetchPageByUriAction =
	| { type: Actions.Request, uri: string }
	| { type: Actions.Result, uri: string, page: Page }
	| { type: Actions.Error, uri: string, error: Error };

const Request = ( uri: string ) => ({ type: Actions.Request, uri });
const Result = ( uri: string, page: Page ) => ({ type: Actions.Result, uri, page });
const ErrorHandler = ( uri: string, error: Error ) => ({ type: Actions.Error, uri, error });

export function FetchPageByUri( uri: string ) {
	return ( dispatch: Redux.Dispatch, getState: () => any, client: ApolloClient<{}> ) => {
		dispatch(Request(uri));

		client.query<WP_FetchPageByUri>({ query: FetchPageByUriQuery, variables: { uri }}).then(
			({ data: { pageBy } }) => dispatch(Result(uri, PageMapper.Map(pageBy))),
			( error ) => dispatch(ErrorHandler(uri, error))
		);
	}
};

export function FetchPageByUriReducer( state: FetchPageByUriState, action: FetchPageByUriAction ): FetchPageByUriState {
	switch (action.type) {
		case Actions.Request: return { ...state, loading: true };
		case Actions.Result: return { ...state, loading: false, pages: [ ...state.pages, action.page ] };
		case Actions.Error: return { ...state, loading: false };
		default: return state;
	}
};
