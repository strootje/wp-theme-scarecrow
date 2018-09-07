import view from './view';
import Connect from 'Hocs/Connect';

import { FetchPosts } from 'Actions/Posts/FetchPosts';

export default Connect(view, dispatch => ({
	GetPosts: () => dispatch(FetchPosts())
}));
