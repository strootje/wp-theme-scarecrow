import { AppState } from 'Actions/Reducers';
import PageMapper from 'Mappers/Wordpress/PageMapper';
import Page from 'Models/Page';
import { WP_FetchPageByPageId } from 'Queries/Wordpress/__generated__/WP_FetchPageByPageId';
import { ApolloClient } from 'apollo-client';
import * as Redux from 'redux';

const FetchPageByPageIdQuery = require('Queries/Wordpress/FetchPageByPageIdQuery');
enum Actions {
	Request = 'FETCH_PAGE_BY_PAGE_ID__REQUEST',
	Result = 'FETCH_PAGE_BY_PAGE_ID__RESULT',
	Error = 'FETCH_PAGE_BY_PAGE_ID__ERROR'
};

export type FetchPageByPageIdState = Page[];

export type FetchPageByPageIdAction =
	| { type: Actions.Request, pageId: number }
	| { type: Actions.Result, pageId: number, page: Page }
	| { type: Actions.Error, pageId: number, error: Error };

const Request = (pageId: number) => ({ type: Actions.Request, pageId });
const Result = (pageId: number, page: Page) => ({ type: Actions.Result, pageId, page });
const ErrorHandler = (pageId: number, error: Error) => ({ type: Actions.Error, pageId, error });

export function FetchPageByPageId(pageId: number) {
	return async (dispatch: Redux.Dispatch, getState: () => AppState, client: ApolloClient<{}>) => {
		await dispatch(Request(pageId));

		try {
			const { data: { pageBy } } = await client.query<WP_FetchPageByPageId>({
				query: FetchPageByPageIdQuery,
				variables: { pageId }
			});

			return await dispatch(Result(pageId, PageMapper.Map(pageBy)));
		} catch (error) {
			return await dispatch(ErrorHandler(pageId, error));
		}
	}
};

export function FetchPageByPageIdReducer(state: FetchPageByPageIdState, action: FetchPageByPageIdAction): FetchPageByPageIdState {
	switch (action.type) {
		case Actions.Request: return [...state];
		case Actions.Result: return [...state, action.page];
		case Actions.Error: return [...state];
		default: return state;
	}
};
