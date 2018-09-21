import { AppState } from 'Actions/Reducers';
import PostMapper from 'Mappers/Wordpress/PostMapper';
import Paged from 'Models/Paged';
import Post from 'Models/Post';
import { WP_FetchPosts } from 'Queries/Wordpress/__generated__/WP_FetchPosts';
import { ApolloClient } from 'apollo-client';
import * as Redux from 'redux';

const FetchPostsQuery = require('Queries/Wordpress/FetchPostsQuery');
enum Actions {
	Request = 'FETCH_POSTS__REQUEST',
	Result = 'FETCH_POSTS__RESULT',
	Error = 'FETCH_POSTS__ERROR'
};

export type FetchPostsState = Paged<Post>[];

export type FetchPostsAction =
	| { type: Actions.Request }
	| { type: Actions.Result, posts: Paged<Post>[] }
	| { type: Actions.Error, error: Error };

const Request = () => ({ type: Actions.Request });
const Result = (posts: Paged<Post>[]) => ({ type: Actions.Result, posts });
const ErrorHandler = (error: Error) => ({ type: Actions.Error, error });

export function FetchPosts(args: any) {
	return async (dispatch: Redux.Dispatch, getState: () => AppState, client: ApolloClient<{}>) => {
		await dispatch(Request());

		try {
			const { data: { posts } } = await client.query<WP_FetchPosts>({
				query: FetchPostsQuery,
				variables: { ...args }
			});

			return await dispatch(Result(PostMapper.MapAll(posts)));
		} catch (error) {
			return await dispatch(ErrorHandler(error));
		}
	}
};

export function FetchPostsReducer(state: FetchPostsState, action: FetchPostsAction): FetchPostsState {
	switch (action.type) {
		case Actions.Request: return [...state];
		case Actions.Result: return [...state, ...action.posts];
		case Actions.Error: return [...state];
		default: return state;
	}
};
