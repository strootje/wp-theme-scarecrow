import Page from "Models/Page";
import { FetchPageByUri_pageBy } from "Entities/Wordpress/FetchPageByUri";

export default class {
	static Map( page: FetchPageByUri_pageBy ): Page {
		if (page.title == null) { throw Error('title cannot be null'); }

		return new Page(
			page.id,
			page.title
		);
	}

	static MapAll( tags: FetchPageByUri_pageBy[] ): Page[] {
		const results: Page[] = [];

		tags.forEach(tag => results.push(this.Map(tag)));

		return results;
	}
}
