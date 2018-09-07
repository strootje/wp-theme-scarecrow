import Connect from 'Hocs/Connect';
import view from './view';

import { MenuLocation } from 'Entities/Wordpress/globalTypes';
import { FetchPageByPageId } from 'Actions/Pages/FetchPageByPageId';
import { FetchTags } from 'Actions/Tags/FetchTags';
import { FetchMenuByLocation } from 'Actions/Menus/FetchMenuByLocation';

export default Connect(view, dispatch => ({
	GetPageById: ( pageId: number ) => dispatch(FetchPageByPageId(pageId)),
	GetTags: () => dispatch(FetchTags()),
	GetSitemap: () => dispatch(FetchMenuByLocation(MenuLocation.SITEMAP)),
	GetSocialLinks: () => dispatch(FetchMenuByLocation(MenuLocation.FOOTER))
}));
