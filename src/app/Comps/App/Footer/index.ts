import { FetchMenuByLocation } from 'Actions/Menus/FetchMenuByLocation';
import { FetchPageByPageId } from 'Actions/Pages/FetchPageByPageId';
import { FetchTags } from 'Actions/Tags/FetchTags';
import Connect from 'Hocs/Connect';
import { MenuLocation } from '__generated__/globalTypes';

import view from './view';

export default Connect(view, dispatch => ({
	GetPageById: (pageId: number) => dispatch(FetchPageByPageId(pageId)),
	GetTags: () => dispatch(FetchTags()),
	GetSitemap: () => dispatch(FetchMenuByLocation(MenuLocation.SITEMAP)),
	GetSocialLinks: () => dispatch(FetchMenuByLocation(MenuLocation.FOOTER))
}));
