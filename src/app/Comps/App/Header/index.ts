import { MenuLocation } from '__generated__/globalTypes';

import Connect from 'Hocs/Connect';

import { FetchMenuByLocation } from 'Actions/Menus/FetchMenuByLocation';

import View, { DispatchProps } from './view';

export default Connect<DispatchProps>(View, dispatch => ({
	GetMenu: async () => await dispatch(FetchMenuByLocation(MenuLocation.HEADER))
}));
