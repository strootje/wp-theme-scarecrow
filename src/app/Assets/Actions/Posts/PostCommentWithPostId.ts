import { AppState } from 'Actions/Reducers';
import CommentMapper from 'Mappers/Wordpress/CommentMapper';
import Comment from 'Models/Comment';
import Paged from 'Models/Paged';
import Post from 'Models/Post';
import { WP_PostCommentWithPostId } from 'Queries/Wordpress/__generated__/WP_PostCommentWithPostId';
import { ApolloClient } from 'apollo-client';
import * as Redux from 'redux';

const PostCommentWithPostId2 = require('Queries/Wordpress/PostCommentWithPostId');

enum Actions {
	Request = 'POST_COMMENT_WITH_POST_ID__REQUEST',
	Result = 'POST_COMMENT_WITH_POST_ID__RESULT',
	Error = 'POST_COMMENT_WITH_POST_ID__ERROR'
};

export type PostCommentWithPostIdState = Paged<Post>[];

export type PostCommentWithPostIdAction =
	| { type: Actions.Request, postId: number }
	| { type: Actions.Result, postId: number, comment: Comment }
	| { type: Actions.Error, postId: number, error: Error };

const Request = (postId: number) => ({ type: Actions.Request, postId });
const Result = (postId: number, comment: Comment) => ({ type: Actions.Result, postId, comment });
const ErrorHandler = (postId: number, error: Error) => ({ type: Actions.Error, postId, error });

export function PostCommentWithPostId(postId: number, comment: any) {
	return async (dispatch: Redux.Dispatch, getState: () => AppState, client: ApolloClient<{}>) => {
		await dispatch(Request(postId));

		try {
			const { data } = await client.mutate<WP_PostCommentWithPostId>({
				mutation: PostCommentWithPostId2,
				variables: { postId, ...comment }
			});

			if (data != null) {
				return await dispatch(Result(postId, CommentMapper.MapAfterCreate(data.createComment)));
			}

		} catch (error) {
			return await dispatch(ErrorHandler(postId, error));
		}
	}
};

export function PostCommentWithPostIdReducer(state: PostCommentWithPostIdState, action: PostCommentWithPostIdAction): PostCommentWithPostIdState {
	switch (action.type) {
		case Actions.Request: return [...state];
		case Actions.Result:
			state.filter(post => post.node.PostId == action.postId).forEach(post => {
				post.node.Comments.unshift({ cursor: '', node: action.comment });
				post.node.Comments.sort((c1, c2) => c2.node.Date.getTime() - c1.node.Date.getTime());
			});

			return [...state];
		case Actions.Error: return [...state];
		default: return state;
	}
};
