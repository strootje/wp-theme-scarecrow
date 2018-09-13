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

export interface FetchPostByUriState {
	loading: boolean,
	posts: Paged<Post>[]
};

export type FetchPostByUriAction =
	| { type: Actions.Request, uri: string }
	| { type: Actions.Result, uri: string, post: Paged<Post> }
	| { type: Actions.Error, uri: string, error: Error };

const Request = (uri: string) => ({ type: Actions.Request, uri });
const Result = (uri: string, post: Paged<Post>) => ({ type: Actions.Result, uri, post });
const ErrorHandler = (uri: string, error: Error) => ({ type: Actions.Error, uri, error });

export function FetchPostByUri(uri: string) {
	return (dispatch: Redux.Dispatch, getState: () => AppState, client: ApolloClient<{}>) => {
		dispatch(Request(uri));

		client.query<WP_FetchPostByUri>({ query: FetchPostByUriQuery, variables: { uri } }).then(
			({ data: { postBy } }) => dispatch(Result(uri, PostMapper.MapSingle(postBy))),
			(error) => dispatch(ErrorHandler(uri, error))
		);
	}
};

export function FetchPostByUriReducer(state: FetchPostByUriState, action: FetchPostByUriAction): FetchPostByUriState {
	switch (action.type) {
		case Actions.Request: return { ...state, loading: true };
		case Actions.Result: return { ...state, loading: false, posts: [...state.posts, action.post] };
		case Actions.Error: return { ...state, loading: false };
		default: return state;
	}
};
