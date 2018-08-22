import Connect from 'Hocs/Connect';
import view from './view';

import { FetchPageByUri } from 'Actions/Pages/FetchPageByUri';

export default Connect(view, dispatch => ({
	GetPage: ( uri: string ) => dispatch(FetchPageByUri(uri))
}));
