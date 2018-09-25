import { PostCommentWithPostId } from 'Actions/Posts/PostCommentWithPostId';
import Connect from 'Hocs/Connect';

import View, { DispatchProps } from './view';

export default Connect<DispatchProps>(View, dispatch => ({
	PostCommentForPost: async (postId: number, comment: any) => await dispatch(PostCommentWithPostId(postId, comment))
}));
