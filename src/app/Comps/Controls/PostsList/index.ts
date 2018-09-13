import { FetchPosts } from 'Actions/Posts/FetchPosts';
import Connect from 'Hocs/Connect';

import view, { DispatchProps } from './view';

export default Connect<DispatchProps>(view, dispatch => ({
	GetPosts: (args) => dispatch(FetchPosts(args))
}));
