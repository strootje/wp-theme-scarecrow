import Tag from "Models/Tag";
import { WP_FetchTags_tags_nodes, WP_FetchTags_tags } from "Queries/Wordpress/__generated__/WP_FetchTags";

type WPTag = WP_FetchTags_tags_nodes | null;
type WPTags = WP_FetchTags_tags | null;

export default class {
	static Map( tag: WPTag ): Tag {
		if (tag == null) { throw Error('tag cannot be null'); }
		if (tag.name == null) { throw Error('tag.name cannot be null'); }

		return new Tag(
			tag.id,
			tag.name,
			tag.link || '',
			tag.count || 0
		);
	}

	static MapAll( tags: WPTags ): Tag[] {
		if (tags == null) { throw Error('tags cannot be null'); }
		if (tags.nodes == null) { throw Error('tags.nodes cannot be null'); }

		const results: Tag[] = [];
		tags.nodes.forEach(tag => results.push(this.Map(tag)));

		return results;
	}
}
