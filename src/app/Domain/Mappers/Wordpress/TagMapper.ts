import Tag from "Models/Tag";
import { WP_FetchTags_tags, WP_FetchTags_tags_nodes } from "Entities/Wordpress/WP_FetchTags";

export default class {
	static Map( tag: (WP_FetchTags_tags_nodes | null) ): Tag {
		if (tag == null) { throw Error('tag cannot be null'); }
		if (tag.name == null) { throw Error('name cannot be null'); }

		return new Tag(
			tag.id,
			tag.name,
			tag.link || '',
			tag.count || 0
		);
	}

	static MapAll( tags: WP_FetchTags_tags | null ): Tag[] {
		if (tags == null) { throw Error('tags cannot be null'); }
		if (tags.nodes == null) { throw Error('nodes cannot be null'); }

		const results: Tag[] = [];
		tags.nodes.forEach(tag => results.push(this.Map(tag)));

		return results;
	}
}
