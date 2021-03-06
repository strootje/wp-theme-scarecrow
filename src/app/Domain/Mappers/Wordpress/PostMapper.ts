import NoNull from 'Helpers/NoNull';
import CategoryMapper from 'Mappers/Wordpress/CategoryMapper';
import ThumbnailsMapper from 'Mappers/Wordpress/ThumbnailsMapper';
import Paged from 'Models/Paged';
import Post from 'Models/Post';
import {
	WP_FetchPosts_posts, WP_FetchPosts_posts_edges_node
} from 'Queries/Wordpress/__generated__/WP_FetchPosts';
import UserMapper from 'Mappers/Wordpress/UserMapper';

type WPPost = WP_FetchPosts_posts_edges_node | null;
type WPPosts = WP_FetchPosts_posts | null;

export default class {
	static Map(post: WPPost): Post {
		if (post == null) { throw Error('post cannot be null'); }
		if (post.title == null) { throw Error('post.title cannot be null'); }
		if (post.date == null) { throw Error('post.date cannot be null'); }
		if (post.link == null) { throw Error('post.link cannot be null'); }

		return new Post(
			post.id,
			post.postId,
			post.title,
			new Date(post.date),
			post.link,
			UserMapper.Map(post.author),
			post.content || '',
			CategoryMapper.MapAll(post.categories),
			ThumbnailsMapper.Map({
				normal: post.thumbnail
			})
		);
	}

	static MapSingle(post: WPPost): Paged<Post> {
		return {
			cursor: '',
			node: this.Map(post)
		};
	}

	static MapAll(posts: WPPosts): Paged<Post>[] {
		if (posts == null) { throw Error('posts cannot be null'); }
		if (posts.edges == null) { throw Error('posts.edges cannot be null'); }

		const results: Paged<Post>[] = [];
		NoNull(posts.edges).forEach(post => results.push({ cursor: post.cursor, node: this.Map(post.node) }));

		return results;
	}
}
