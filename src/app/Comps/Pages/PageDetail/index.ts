import Connect from 'Hocs/Connect';

import { FetchPageByPageId } from 'Actions/Pages/FetchPageByPageId';
import { FetchPageByUri } from 'Actions/Pages/FetchPageByUri';

import View, { DispatchProps } from './view';

export default Connect<DispatchProps>(View, dispatch => ({
	GetPageByPageId: (pageId: number) => dispatch(FetchPageByPageId(pageId)),
	GetPageByUri: (uri: string) => dispatch(FetchPageByUri(uri))
}));
