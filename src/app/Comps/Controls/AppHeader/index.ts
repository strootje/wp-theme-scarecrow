import Connect from 'Hocs/Connect';
import view from './view';

import { MenuLocation } from '__generated__/globalTypes';
import { FetchMenuByLocation } from 'Actions/Menus/FetchMenuByLocation';

export default Connect(view, dispatch => ({
	GetMenu: () => dispatch(FetchMenuByLocation(MenuLocation.HEADER))
}));
