import {
	FetchCommentsForPostByPostUriAction, FetchCommentsForPostByPostUriReducer,
	FetchCommentsForPostByPostUriState
} from 'Actions/Posts/FetchCommentsForPostByPostUri';
import {
	FetchPostByUriAction, FetchPostByUriReducer, FetchPostByUriState
} from 'Actions/Posts/FetchPostByUri';
import {
	PostCommentWithPostIdAction, PostCommentWithPostIdReducer, PostCommentWithPostIdState
} from 'Actions/Posts/PostCommentWithPostId';

import { FetchPostsAction, FetchPostsReducer, FetchPostsState } from './FetchPosts';

export type PostsState =
	& FetchCommentsForPostByPostUriState
	& FetchPostByUriState
	& FetchPostsState
	& PostCommentWithPostIdState;
export type PostsAction =
	| FetchCommentsForPostByPostUriAction
	| FetchPostByUriAction
	| FetchPostsAction
	| PostCommentWithPostIdAction;

const reducers: any[] = [
	FetchCommentsForPostByPostUriReducer,
	FetchPostByUriReducer,
	FetchPostsReducer,
	PostCommentWithPostIdReducer
];

const dstate: PostsState = [];

export function PostsReducer(state: PostsState = dstate, action: PostsAction): PostsState {
	return reducers.reduce((state, reducer) => reducer(state, action), state);
}
