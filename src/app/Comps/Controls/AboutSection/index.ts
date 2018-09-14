import Connect from 'Hocs/Connect';

import { FetchPageByPageId } from 'Actions/Pages/FetchPageByPageId';

import View, { DispatchProps } from './view';

export default Connect<DispatchProps>(View, dispatch => ({
	GetPageById: (pageId: number) => dispatch(FetchPageByPageId(pageId))
}));
