import { MenuLocation } from '__generated__/globalTypes';

import Connect from 'Hocs/Connect';

import { FetchMenuByLocation } from 'Actions/Menus/FetchMenuByLocation';
import { FetchTags } from 'Actions/Tags/FetchTags';

import View, { DispatchProps } from './view';

export default Connect<DispatchProps>(View, dispatch => ({
	GetTags: async () => await dispatch(FetchTags()),
	GetSitemap: async () => await dispatch(FetchMenuByLocation(MenuLocation.SITEMAP)),
	GetSocialLinks: async () => await dispatch(FetchMenuByLocation(MenuLocation.FOOTER))
}));
