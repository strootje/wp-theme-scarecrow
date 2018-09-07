import Post from "Models/Post";
import ThumbnailsMapper from "Mappers/Wordpress/ThumbnailsMapper";
import CategoryMapper from "Mappers/Wordpress/CategoryMapper";
import { WP_FetchPosts_posts, WP_FetchPosts_posts_edges } from "Queries/Wordpress/__generated__/WP_FetchPosts";

type WPPost = WP_FetchPosts_posts_edges | null;
type WPPosts = WP_FetchPosts_posts | null;

export default class {
	static Map( post: WPPost ): Post {
		if (post == null) { throw Error('post cannot be null'); }
		if (post.node == null) { throw Error('post.node cannot be null'); }
		if (post.node.title == null) { throw Error('post.node.title cannot be null'); }
		if (post.node.uri == null) { throw Error('post.node.uri cannot be null'); }

		return new Post(
			post.node.id,
			post.node.postId,
			post.node.title,
			post.node.uri,
			post.node.content || '',
			CategoryMapper.MapAll(post.node.categories),
			ThumbnailsMapper.Map({
				normal: post.node.thumbnail
			})
		);
	}

	static MapAll( posts: WPPosts ): Post[] {
		if (posts == null) { throw Error('posts cannot be null'); }
		if (posts.edges == null) { throw Error('posts.edges cannot be null'); }

		const results: Post[] = [];
		posts.edges.forEach(post => results.push(this.Map(post)));

		return results;
	}
}
