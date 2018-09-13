import { FetchPosts } from 'Actions/Posts/FetchPosts';
import Connect from 'Hocs/Connect';

import view from './view';

export default Connect(view, dispatch => ({
	GetPosts: () => dispatch(FetchPosts({}))
}));
