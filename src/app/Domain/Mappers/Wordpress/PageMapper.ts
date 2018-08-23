import Page from "Models/Page";
import { WP_FetchPageByUri_pageBy } from "Entities/Wordpress/WP_FetchPageByUri";

type WPPage = WP_FetchPageByUri_pageBy | null;
type WPPages = WPPage[] | null;

export default class {
	static Map( page: WPPage ): Page {
		if (page == null) { throw Error('page cannot be null'); }
		if (page.title == null) { throw Error('title cannot be null'); }

		return new Page(
			page.id,
			page.title
		);
	}

	static MapAll( tags: WPPages ): Page[] {
		if (tags == null) { throw Error('tags cannot be null'); }

		const results: Page[] = [];
		tags.forEach(tag => results.push(this.Map(tag)));

		return results;
	}
}
