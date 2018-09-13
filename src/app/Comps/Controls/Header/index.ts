import { FetchMenuByLocation } from 'Actions/Menus/FetchMenuByLocation';
import Connect from 'Hocs/Connect';
import { MenuLocation } from '__generated__/globalTypes';

import view from './view';

export default Connect(view, dispatch => ({
	GetMenu: () => dispatch(FetchMenuByLocation(MenuLocation.HEADER))
}));
