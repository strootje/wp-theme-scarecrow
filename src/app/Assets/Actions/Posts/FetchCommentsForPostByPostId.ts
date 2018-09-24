import { AppState } from 'Actions/Reducers';
import CommentMapper from 'Mappers/Wordpress/CommentMapper';
import Comment from 'Models/Comment';
import Paged from 'Models/Paged';
import Post from 'Models/Post';
import { WP_FetchCommentsByPostId } from 'Queries/Wordpress/__generated__/WP_FetchCommentsByPostId';
import { ApolloClient } from 'apollo-client';
import * as Redux from 'redux';

const FetchCommentsByPostId = require('Queries/Wordpress/FetchCommentsByPostId');

enum Actions {
	Request = 'FETCH_COMMENTS_FOR_POST_BY_POST_ID__REQUEST',
	Result = 'FETCH_COMMENTS_FOR_POST_BY_POST_ID__RESULT',
	Error = 'FETCH_COMMENTS_FOR_POST_BY_POST_ID__ERROR'
};

export type FetchCommentsForPostByPostIdState = Paged<Post>[];

export type FetchCommentsForPostByPostIdAction =
	| { type: Actions.Request, postId: number }
	| { type: Actions.Result, postId: number, comments: Paged<Comment>[] }
	| { type: Actions.Error, postId: number, error: Error };

const Request = (postId: number) => ({ type: Actions.Request, postId });
const Result = (postId: number, comments: Paged<Comment>[]) => ({ type: Actions.Result, postId, comments });
const ErrorHandler = (postId: number, error: Error) => ({ type: Actions.Error, postId, error });

export function FetchCommentsForPostByPostId(postId: number) {
	return async (dispatch: Redux.Dispatch, getState: () => AppState, client: ApolloClient<{}>) => {
		await dispatch(Request(postId));

		try {
			const { data: { postBy } } = await client.query<WP_FetchCommentsByPostId>({
				query: FetchCommentsByPostId,
				variables: { postId: postId }
			});

			return await dispatch(Result(postId, CommentMapper.MapAllFromPost(postBy)));
		} catch (error) {
			return await dispatch(ErrorHandler(postId, error));
		}
	}
};

export function FetchCommentsForPostByPostIdReducer(state: FetchCommentsForPostByPostIdState, action: FetchCommentsForPostByPostIdAction): FetchCommentsForPostByPostIdState {
	switch (action.type) {
		case Actions.Request: return [...state];
		case Actions.Result:
			state.filter(post => post.node.PostId == action.postId).forEach(post => {
				action.comments.forEach(comment => {
					post.node.Comments.push(comment);
					post.node.Comments.sort((c1, c2) => c2.node.Date.getTime() - c1.node.Date.getTime());
				});
			});

			return [...state];
		case Actions.Error: return [...state];
		default: return state;
	}
};
