import {
	FetchPostByUriAction, FetchPostByUriReducer, FetchPostByUriState
} from 'Actions/Posts/FetchPostByUri';

import { FetchPostsAction, FetchPostsReducer, FetchPostsState } from './FetchPosts';

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

export function PostsReducer(state: PostsState = dstate, action: PostsAction): PostsState {
	return reducers.reduce((state, reducer) => reducer(state, action), state);
}
