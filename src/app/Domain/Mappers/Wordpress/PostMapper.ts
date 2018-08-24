import Post from "Models/Post";
import { WP_FetchPosts_posts, WP_FetchPosts_posts_nodes } from "Entities/Wordpress/WP_FetchPosts";

type WPPost = WP_FetchPosts_posts_nodes | null;
type WPPosts = WP_FetchPosts_posts | null;

export default class {
	static Map( post: WPPost ): Post {
		if (post == null) { throw Error('post cannot be null'); }
		if (post.title == null) { throw Error('post.title cannot be null'); }
		if (post.uri == null) { throw Error('post.uri cannot be null'); }

		return new Post(
			post.id,
			post.postId,
			post.title,
			post.uri
		);
	}

	static MapAll( posts: WPPosts ): Post[] {
		if (posts == null) { throw Error('posts cannot be null'); }
		if (posts.nodes == null) { throw Error('posts.nodes cannot be null'); }

		const results: Post[] = [];
		posts.nodes.forEach(post => results.push(this.Map(post)));

		return results;
	}
}
