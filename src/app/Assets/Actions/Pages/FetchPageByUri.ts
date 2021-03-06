import { AppState } from 'Actions/Reducers';
import PageMapper from 'Mappers/Wordpress/PageMapper';
import Page from 'Models/Page';
import { WP_FetchPageByUri } from 'Queries/Wordpress/__generated__/WP_FetchPageByUri';
import { ApolloClient } from 'apollo-client';
import * as Redux from 'redux';

const FetchPageByUriQuery = require('Queries/Wordpress/FetchPageByUriQuery');
enum Actions {
	Request = 'FETCH_PAGE_BY_URI__REQUEST',
	Result = 'FETCH_PAGE_BY_URI__RESULT',
	Error = 'FETCH_PAGE_BY_URI__ERROR'
};

export type FetchPageByUriState = Page[];

export type FetchPageByUriAction =
	| { type: Actions.Request, uri: string }
	| { type: Actions.Result, uri: string, page: Page }
	| { type: Actions.Error, uri: string, error: Error };

const Request = (uri: string) => ({ type: Actions.Request, uri });
const Result = (uri: string, page: Page) => ({ type: Actions.Result, uri, page });
const ErrorHandler = (uri: string, error: Error) => ({ type: Actions.Error, uri, error });

export function FetchPageByUri(uri: string) {
	return async (dispatch: Redux.Dispatch, getState: () => AppState, client: ApolloClient<{}>) => {
		await dispatch(Request(uri));

		try {
			const { data: { pageBy } } = await client.query<WP_FetchPageByUri>({
				query: FetchPageByUriQuery,
				variables: { uri }
			});

			return await dispatch(Result(uri, PageMapper.Map(pageBy)));
		} catch (error) {
			return await dispatch(ErrorHandler(uri, error))
		}
	}
};

export function FetchPageByUriReducer(state: FetchPageByUriState, action: FetchPageByUriAction): FetchPageByUriState {
	switch (action.type) {
		case Actions.Request: return [...state];
		case Actions.Result: return [...state, action.page];
		case Actions.Error: return [...state];
		default: return state;
	}
};
