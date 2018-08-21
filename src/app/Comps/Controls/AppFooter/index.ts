import Connect from 'Hocs/Connect';
import view from './view';

import { MenuLocation } from 'Entities/Wordpress/globalTypes';
import { FetchMenuByLocation } from 'Actions/ViewData/Menus/FetchByLocation';
import { FetchAllTags } from 'Actions/Tags/FetchAll';

export default Connect(view, dispatch => ({
	GetMenu: () => dispatch(FetchMenuByLocation(MenuLocation.FOOTER) as any),
	GetTags: () => dispatch(FetchAllTags() as any)
}));
