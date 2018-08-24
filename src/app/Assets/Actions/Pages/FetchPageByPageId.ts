import * as Redux from 'redux';
import { ApolloClient } from 'apollo-client';
const FetchPageByPageIdQuery = require('Queries/Wordpress/FetchPageByPageIdQuery');
import { WP_FetchPageByPageId } from 'Entities/Wordpress/WP_FetchPageByPageId';
import PageMapper from 'Mappers/Wordpress/PageMapper';
import Page from 'Models/Page';

enum Actions {
	Request = 'FETCH_PAGE_BY_PAGE_ID__REQUEST',
	Result = 'FETCH_PAGE_BY_PAGE_ID__RESULT',
	Error = 'FETCH_PAGE_BY_PAGE_ID__ERROR'
};

export interface FetchPageByPageIdState {
	loading: boolean,
	pages: Page[]
};

export type FetchPageByPageIdAction =
	| { type: Actions.Request, pageId: number }
	| { type: Actions.Result, pageId: number, page: Page }
	| { type: Actions.Error, pageId: number, error: Error };

const Request = ( pageId: number ) => ({ type: Actions.Request, pageId });
const Result = ( pageId: number, page: Page ) => ({ type: Actions.Result, pageId, page });
const ErrorHandler = ( pageId: number, error: Error ) => ({ type: Actions.Error, pageId, error });

export function FetchPageByPageId( pageId: number ) {
	return ( dispatch: Redux.Dispatch, getState: () => any, client: ApolloClient<{}> ) => {
		dispatch(Request(pageId));

		client.query<WP_FetchPageByPageId>({ query: FetchPageByPageIdQuery, variables: { pageId }}).then(
			({ data: { pageBy } }) => dispatch(Result(pageId, PageMapper.Map(pageBy))),
			( error ) => dispatch(ErrorHandler(pageId, error))
		);
	}
};

export function FetchPageByPageIdReducer( state: FetchPageByPageIdState, action: FetchPageByPageIdAction ): FetchPageByPageIdState {
	switch (action.type) {
		case Actions.Request: return { ...state, loading: true };
		case Actions.Result: return { ...state, loading: false, pages: [ ...state.pages, action.page ] };
		case Actions.Error: return { ...state, loading: false };
		default: return state;
	}
};
