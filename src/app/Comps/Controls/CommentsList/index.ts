import { FetchCommentsForPostByPostId } from 'Actions/Posts/FetchCommentsForPostByPostId';
import Connect from 'Hocs/Connect';
import { Paging } from 'Types/Paging';

import View, { DispatchProps } from './view';

export default Connect<DispatchProps>(View, dispatch => ({
	GetComments: async (postId: number, args: Paging) => await dispatch(FetchCommentsForPostByPostId(postId, args))
}));
