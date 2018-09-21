import { AppState } from 'Actions/Reducers';
import CommentMapper from 'Mappers/Wordpress/CommentMapper';
import Comment from 'Models/Comment';
import Paged from 'Models/Paged';
import Post from 'Models/Post';
import {
	WP_FetchCommentsByPostUri
} from 'Queries/Wordpress/__generated__/WP_FetchCommentsByPostUri';
import { ApolloClient } from 'apollo-client';
import * as Redux from 'redux';

const FetchCommentsByPostUri = require('Queries/Wordpress/FetchCommentsByPostUri');
enum Actions {
	Request = 'FETCH_COMMENTS_FOR_POST_BY_POST_URI__REQUEST',
	Result = 'FETCH_COMMENTS_FOR_POST_BY_POST_URI__RESULT',
	Error = 'FETCH_COMMENTS_FOR_POST_BY_POST_URI__ERROR'
};

export type FetchCommentsForPostByPostUriState = Paged<Post>[];

export type FetchCommentsForPostByPostUriAction =
	| { type: Actions.Request, postUri: string }
	| { type: Actions.Result, postUri: string, comments: Paged<Comment>[] }
	| { type: Actions.Error, postUri: string, error: Error };

const Request = (postUri: string) => ({ type: Actions.Request, postUri });
const Result = (postUri: string, comments: Paged<Comment>[]) => ({ type: Actions.Result, postUri, comments });
const ErrorHandler = (postUri: string, error: Error) => ({ type: Actions.Error, postUri, error });

export function FetchCommentsForPostByPostUri(postUri: string) {
	return async (dispatch: Redux.Dispatch, getState: () => AppState, client: ApolloClient<{}>) => {
		await dispatch(Request(postUri));

		try {
			const { data: { postBy } } = await client.query<WP_FetchCommentsByPostUri>({
				query: FetchCommentsByPostUri,
				variables: { uri: postUri }
			});

			return await dispatch(Result(postUri, CommentMapper.MapAllFromPost(postBy)));
		} catch (error) {
			return await dispatch(ErrorHandler(postUri, error));
		}
	}
};

export function FetchCommentsForPostByPostUriReducer(state: FetchCommentsForPostByPostUriState, action: FetchCommentsForPostByPostUriAction): FetchCommentsForPostByPostUriState {
	switch (action.type) {
		case Actions.Request: return [...state];
		case Actions.Result:
			state.filter(post => post.node.Link.search(action.postUri) >= 0).forEach(post => {
				action.comments.forEach(comment => post.node.Comments.push(comment));
			});

			return [...state];
		case Actions.Error: return [...state];
		default: return state;
	}
};
