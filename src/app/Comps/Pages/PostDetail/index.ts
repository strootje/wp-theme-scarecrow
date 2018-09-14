import { FetchPostByUri } from 'Actions/Posts/FetchPostByUri';
import Connect from 'Hocs/Connect';

import View, { DispatchProps } from './view';

export default Connect<DispatchProps>(View, dispatch => ({
	GetPostByUri: (postUri: string) => dispatch(FetchPostByUri(postUri))
}));
