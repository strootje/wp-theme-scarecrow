import Page from "Models/Page";
import ThumbnailsMapper from "Mappers/Wordpress/ThumbnailsMapper";
import { WP_FetchPageByUri_pageBy } from "Queries/Wordpress/__generated__/WP_FetchPageByUri";

type WPPage = WP_FetchPageByUri_pageBy | null;
type WPPages = WPPage[] | null;

export default class {
	static Map( page: WPPage ): Page {
		if (page == null) { throw Error('page cannot be null'); }
		if (page.pageId == null) { throw Error('page.pageId cannot be null'); }
		if (page.title == null) { throw Error('page.title cannot be null'); }
		if (page.uri == null) { throw Error('page.uri cannot be null'); }

		return new Page(
			page.id,
			page.pageId,
			page.title,
			page.uri,
			page.content || '',
			ThumbnailsMapper.Map({
				normal: page.thumbnail
			})
		);
	}

	static MapAll( tags: WPPages ): Page[] {
		if (tags == null) { throw Error('tags cannot be null'); }

		const results: Page[] = [];
		tags.forEach(tag => results.push(this.Map(tag)));

		return results;
	}
}
