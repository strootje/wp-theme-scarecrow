import PageInfo from "Models/PageInfo";
import { WP_FetchPosts_posts } from "Queries/Wordpress/__generated__/WP_FetchPosts";

type PageInfoContainerType = null
	| WP_FetchPosts_posts;

export default class {
	static Map( pageInfoContainer: PageInfoContainerType ): PageInfo {
		if (pageInfoContainer == null) { throw Error('pageInfoContainer cannot be null'); }
		if (pageInfoContainer.pageInfo == null) { throw Error('pageInfoContainer.pageInfo cannot be null'); }

		return new PageInfo(
			pageInfoContainer.pageInfo.hasPreviousPage,
			pageInfoContainer.pageInfo.hasNextPage);
	}
}
