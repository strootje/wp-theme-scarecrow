import Connect from 'Hocs/Connect';
import view, { DispatchProps } from './view';
import { FetchPostByUri } from 'Actions/Posts/FetchPostByUri';

export default Connect<DispatchProps>(view, dispatch => ({
	GetPostByUri: ( postUri: string ) => dispatch(FetchPostByUri(postUri))
}));
