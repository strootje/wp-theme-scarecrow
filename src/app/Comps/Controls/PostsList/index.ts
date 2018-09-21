import { FetchPosts } from 'Actions/Posts/FetchPosts';
import Connect from 'Hocs/Connect';

import View, { DispatchProps } from './view';

export default Connect<DispatchProps>(View, dispatch => ({
	GetPosts: async (args) => await dispatch(FetchPosts(args))
}));
