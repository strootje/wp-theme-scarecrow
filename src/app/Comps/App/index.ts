import Connect from 'Hocs/Connect';

import { FetchSettings } from 'Actions/Settings/FetchSettings';

import View, { DispatchProps } from './view';

export default Connect<DispatchProps>(View, dispatch => ({
	GetSettings: async () =>  await dispatch(FetchSettings())
}));
