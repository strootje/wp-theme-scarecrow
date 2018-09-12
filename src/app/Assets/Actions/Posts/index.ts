import { FetchPostByUriReducer, FetchPostByUriState, FetchPostByUriAction } from 'Actions/Posts/FetchPostByUri';
import { FetchPostsReducer, FetchPostsState, FetchPostsAction } from './FetchPosts';

export type PostsState =
	& FetchPostByUriState
	& FetchPostsState;
export type PostsAction =
	| FetchPostByUriAction
	| FetchPostsAction;

const reducers: any[] = [
	FetchPostByUriReducer,
	FetchPostsReducer
];

const dstate: PostsState = {
	loading: false,
	posts: []
}

export function PostsReducer( state: PostsState = dstate, action: PostsAction ): PostsState {
	return reducers.reduce(( state, reducer ) => reducer(state, action), state);
}
