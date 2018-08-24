import Connect from 'Hocs/Connect';
import view from './view';

import { FetchPageByPageId } from 'Actions/Pages/FetchPageByPageId';
import { FetchPageByUri } from 'Actions/Pages/FetchPageByUri';

export default Connect(view, dispatch => ({
	GetPageByPageId: ( pageId: number ) => dispatch(FetchPageByPageId(pageId)),
	GetPageByUri: ( uri: string ) => dispatch(FetchPageByUri(uri))
}));
