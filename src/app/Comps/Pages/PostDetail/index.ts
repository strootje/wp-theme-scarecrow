import { FetchCommentsForPostByPostUri } from 'Actions/Posts/FetchCommentsForPostByPostUri';
import { FetchPostByUri } from 'Actions/Posts/FetchPostByUri';
import Connect from 'Hocs/Connect';

import View, { DispatchProps } from './view';

export default Connect<DispatchProps>(View, dispatch => ({
	GetPostByUri: async (postUri: string) => await dispatch(FetchPostByUri(postUri)),
	GetCommentsForPost: async (postUri: string) => await dispatch(FetchCommentsForPostByPostUri(postUri))
}));
