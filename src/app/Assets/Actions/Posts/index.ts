import {
	FetchCommentsForPostByPostUriAction, FetchCommentsForPostByPostUriReducer,
	FetchCommentsForPostByPostUriState
} from 'Actions/Posts/FetchCommentsForPostByPostUri';
import {
	FetchPostByUriAction, FetchPostByUriReducer, FetchPostByUriState
} from 'Actions/Posts/FetchPostByUri';

import { FetchPostsAction, FetchPostsReducer, FetchPostsState } from './FetchPosts';

export type PostsState =
	& FetchCommentsForPostByPostUriState
	& FetchPostByUriState
	& FetchPostsState;
export type PostsAction =
	| FetchCommentsForPostByPostUriAction
	| FetchPostByUriAction
	| FetchPostsAction;

const reducers: any[] = [
	FetchCommentsForPostByPostUriReducer,
	FetchPostByUriReducer,
	FetchPostsReducer
];

const dstate: PostsState = [];

export function PostsReducer(state: PostsState = dstate, action: PostsAction): PostsState {
	return reducers.reduce((state, reducer) => reducer(state, action), state);
}
