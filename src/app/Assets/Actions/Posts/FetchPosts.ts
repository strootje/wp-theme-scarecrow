import * as Redux from 'redux';
import { ApolloClient } from 'apollo-client';

import { AppState } from 'Actions/Reducers';
import { WP_FetchPosts } from 'Entities/Wordpress/WP_FetchPosts';
const FetchPostsQuery = require('Queries/Wordpress/FetchPostsQuery');
import PostMapper from 'Mappers/Wordpress/PostMapper';
import Post from 'Models/Post';

enum Actions {
	Request = 'FETCH_POSTS__REQUEST',
	Result = 'FETCH_POSTS__RESULT',
	Error = 'FETCH_POSTS__ERROR'
};

export interface FetchPostsState {
	loading: boolean,
	posts: Post[]
};

export type FetchPostsAction =
	| { type: Actions.Request }
	| { type: Actions.Result, posts: Post[] }
	| { type: Actions.Error, error: Error };

const Request = () => ({ type: Actions.Request });
const Result = ( posts: Post[] ) => ({ type: Actions.Result, posts });
const ErrorHandler = ( error: Error ) => ({ type: Actions.Error, error });

export function FetchPosts() {
	return ( dispatch: Redux.Dispatch, getState: () => AppState, client: ApolloClient<{}> ) => {
		if (getState().Posts.loading) { return; }
		dispatch(Request());

		client.query<WP_FetchPosts>({ query: FetchPostsQuery }).then(
			({ data: { posts }}) => dispatch(Result(PostMapper.MapAll(posts))),
			( error ) => dispatch(ErrorHandler(error))
		);
	}
};

export function FetchPostsReducer( state: FetchPostsState, action: FetchPostsAction ): FetchPostsState {
	switch (action.type) {
		case Actions.Request: return { ...state, loading: true };
		case Actions.Result: return { ...state, loading: false, posts: [ ...state.posts, ...action.posts ] };
		case Actions.Error: return { ...state, loading: false };
		default: return state;
	}
};
