import Connect from 'Hocs/Connect';

import { FetchPosts } from 'Actions/Posts/FetchPosts';

import View, { DispatchProps } from './view';

export default Connect<DispatchProps>(View, dispatch => ({
	GetPosts: (args) => dispatch(FetchPosts(args))
}));
