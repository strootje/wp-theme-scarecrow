import { AppState } from 'Actions/Reducers';
import PostMapper from 'Mappers/Wordpress/PostMapper';
import Paged from 'Models/Paged';
import Post from 'Models/Post';
import { WP_FetchPostByUri } from 'Queries/Wordpress/__generated__/WP_FetchPostByUri';
import { ApolloClient } from 'apollo-client';
import * as Redux from 'redux';

const FetchPostByUriQuery = require('Queries/Wordpress/FetchPostByUriQuery');
enum Actions {
	Request = 'FETCH_POST_BY_URI__REQUEST',
	Result = 'FETCH_POST_BY_URI__RESULT',
	Error = 'FETCH_POST_BY_URI__ERROR'
};

export type FetchPostByUriState = Paged<Post>[];

export type FetchcPostByUriActionRequest = { type: Actions.Request, uri: string };
export type FetchcPostByUriActionResult = { type: Actions.Result, uri: string, post: Paged<Post> };
export type FetchcPostByUriActionError = { type: Actions.Error, uri: string, error: Error };
export type FetchPostByUriActionOutcome = FetchcPostByUriActionResult | FetchcPostByUriActionError;

export type FetchPostByUriAction =
	| FetchcPostByUriActionRequest
	| FetchcPostByUriActionResult
	| FetchcPostByUriActionError;

const Request = (uri: string) => ({ type: Actions.Request, uri });
const Result = (uri: string, post: Paged<Post>) => ({ type: Actions.Result, uri, post });
const ErrorHandler = (uri: string, error: Error) => ({ type: Actions.Error, uri, error });

export function FetchPostByUri(uri: string) {
	return async (dispatch: Redux.Dispatch, getState: () => AppState, client: ApolloClient<{}>) => {
		await dispatch(Request(uri));

		try {
			const { data: { postBy } } = await client.query<WP_FetchPostByUri>({
				query: FetchPostByUriQuery,
				variables: { uri }
			});

			return await dispatch(Result(uri, PostMapper.MapSingle(postBy)));
		} catch (error) {
			return await dispatch(ErrorHandler(uri, error));
		}
	}
};

export function FetchPostByUriReducer(state: FetchPostByUriState, action: FetchPostByUriAction): FetchPostByUriState {
	switch (action.type) {
		case Actions.Request: return [...state];
		case Actions.Result: return [...state, action.post];
		case Actions.Error: return [...state];
		default: return state;
	}
};
