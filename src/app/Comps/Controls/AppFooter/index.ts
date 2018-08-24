import Connect from 'Hocs/Connect';
import view from './view';

import { MenuLocation } from 'Entities/Wordpress/globalTypes';
import { FetchMenuByLocation } from 'Actions/Menus/FetchMenuByLocation';
import { FetchTags } from 'Actions/Tags/FetchTags';

export default Connect(view, dispatch => ({
	GetMenu: () => dispatch(FetchMenuByLocation(MenuLocation.FOOTER)),
	GetTags: () => dispatch(FetchTags())
}));
