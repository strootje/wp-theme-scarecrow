import Connect from 'Hocs/Connect';
import view, { DispatchProps } from './view';

import { FetchPosts } from 'Actions/Posts/FetchPosts';

export default Connect<DispatchProps>(view, dispatch => ({
	GetPosts: ( args ) => dispatch(FetchPosts(args))
}));
