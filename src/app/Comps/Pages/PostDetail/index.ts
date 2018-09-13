import { FetchPostByUri } from 'Actions/Posts/FetchPostByUri';
import Connect from 'Hocs/Connect';

import view, { DispatchProps } from './view';

export default Connect<DispatchProps>(view, dispatch => ({
	GetPostByUri: (postUri: string) => dispatch(FetchPostByUri(postUri))
}));
