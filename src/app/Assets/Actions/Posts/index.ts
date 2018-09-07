import { FetchPostsReducer, FetchPostsState, FetchPostsAction } from './FetchPosts';

export type PostsState = FetchPostsState;
export type PostsAction = FetchPostsAction;

const reducers: (( state: PostsState, action: PostsAction ) => PostsState)[] = [
	FetchPostsReducer
];

const dstate: PostsState = {
	loading: false,
	posts: {}
}

export function PostsReducer( state: PostsState = dstate, action: PostsAction ): PostsState {
	return reducers.reduce(( state, reducer ) => reducer(state, action), state);
}
