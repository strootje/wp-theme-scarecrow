import { FetchPageByPageId } from 'Actions/Pages/FetchPageByPageId';
import Connect from 'Hocs/Connect';

import View, { DispatchProps } from './view';

export default Connect<DispatchProps>(View, dispatch => ({
	GetPageById: async (pageId: number) => await dispatch(FetchPageByPageId(pageId))
}));
