import Tag from "Models/Tag";
import { FetchAllTags_tags_nodes } from "Entities/Wordpress/FetchAllTags";

export default class {
	static Map( tag: FetchAllTags_tags_nodes ): Tag {
		if (tag.name == null) { throw Error('name cannot be null'); }

		return new Tag(
			tag.id,
			tag.name,
			tag.link || '',
			tag.count || 0
		);
	}

	static MapAll( tags: FetchAllTags_tags_nodes[] ): Tag[] {
		const results: Tag[] = [];

		tags.forEach(tag => results.push(this.Map(tag)));

		return results;
	}
}
