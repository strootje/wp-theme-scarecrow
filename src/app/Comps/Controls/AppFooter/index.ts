import Connect from 'Hocs/Connect';
import view from './view';

import { MenuLocation } from 'Entities/Wordpress/globalTypes';
import { FetchMenu } from 'Actions/ViewData/Menus/Fetch';

export default Connect(view, dispatch => ({
	GetMenu: () => dispatch(FetchMenu(MenuLocation.FOOTER) as any)
}));
