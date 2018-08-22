import Connect from 'Hocs/Connect';
import view from './view';

import { FetchPageByUri } from 'Actions/Pages/FetchBySlug';

export default Connect(view, dispatch => ({
	GetPage: ( uri: string ) => dispatch(FetchPageByUri(uri) as any)
}));
