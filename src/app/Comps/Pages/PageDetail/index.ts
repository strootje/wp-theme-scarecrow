import { FetchPageByPageId } from 'Actions/Pages/FetchPageByPageId';
import { FetchPageByUri } from 'Actions/Pages/FetchPageByUri';
import Connect from 'Hocs/Connect';

import View, { DispatchProps } from './view';

export default Connect<DispatchProps>(View, dispatch => ({
	GetPageByPageId: async (pageId: number) => await dispatch(FetchPageByPageId(pageId)),
	GetPageByUri: async (uri: string) => await dispatch(FetchPageByUri(uri))
}));
