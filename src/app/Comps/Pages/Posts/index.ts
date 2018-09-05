import Connect from 'Hocs/Connect';
import view from './view';

import { FetchPosts } from 'Actions/Posts/FetchPosts';

export default Connect(view, dispatch => ({
	GetPosts: () => dispatch(FetchPosts())
}));
