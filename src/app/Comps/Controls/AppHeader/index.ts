import Connect from 'Hocs/Connect';
import view from './view';

import { MenuLocation } from 'Entities/Wordpress/globalTypes';
import { FetchMenuByLocation } from 'Actions/Menus/FetchMenuByLocation';

export default Connect(view, dispatch => ({
	GetMenu: () => dispatch(FetchMenuByLocation(MenuLocation.HEADER))
}));
