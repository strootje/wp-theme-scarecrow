import { FetchCommentsForPostByPostId } from 'Actions/Posts/FetchCommentsForPostByPostId';
import { PostCommentWithPostId } from 'Actions/Posts/PostCommentWithPostId';
import Connect from 'Hocs/Connect';

import View, { DispatchProps } from './view';

export default Connect<DispatchProps>(View, dispatch => ({
	GetCommentsForPost: async (postId: number) => await dispatch(FetchCommentsForPostByPostId(postId)),
	PostCommentForPost: async (postId: number, comment: any) => await dispatch(PostCommentWithPostId(postId, comment))
}));
