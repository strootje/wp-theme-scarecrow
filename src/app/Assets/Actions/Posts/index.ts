import {
	FetchCommentsForPostByPostIdAction, FetchCommentsForPostByPostIdReducer,
	FetchCommentsForPostByPostIdState
} from 'Actions/Posts/FetchCommentsForPostByPostId';
import {
	FetchPostByUriAction, FetchPostByUriReducer, FetchPostByUriState
} from 'Actions/Posts/FetchPostByUri';
import {
	PostCommentWithPostIdAction, PostCommentWithPostIdReducer, PostCommentWithPostIdState
} from 'Actions/Posts/PostCommentWithPostId';

import { FetchPostsAction, FetchPostsReducer, FetchPostsState } from './FetchPosts';

export type PostsState =
	& FetchCommentsForPostByPostIdState
	& FetchPostByUriState
	& FetchPostsState
	& PostCommentWithPostIdState;
export type PostsAction =
	| FetchCommentsForPostByPostIdAction
	| FetchPostByUriAction
	| FetchPostsAction
	| PostCommentWithPostIdAction;

const reducers: any[] = [
	FetchCommentsForPostByPostIdReducer,
	FetchPostByUriReducer,
	FetchPostsReducer,
	PostCommentWithPostIdReducer
];

const dstate: PostsState = [];

export function PostsReducer(state: PostsState = dstate, action: PostsAction): PostsState {
	return reducers.reduce((state, reducer) => reducer(state, action), state);
}
