import User from 'Models/User';
import { WP_UserFields } from 'Queries/Wordpress/Fragments/__generated__/WP_UserFields';
import {
	WP_FetchPosts_posts_edges_node_author
} from 'Queries/Wordpress/__generated__/WP_FetchPosts';

type WPUser = null
	| WP_UserFields
	| WP_FetchPosts_posts_edges_node_author;

export default class UserMapper {
	static Map(user: WPUser): User {
		if (user == null) { throw Error('user cannot be null'); }
		if (user.userId == null) { throw Error('user.userId cannot be null'); }
		if (user.email == null) { throw Error('user.email cannot be null'); }
		if (user.nicename == null) { throw Error('user.nicename cannot be null'); }
		if (user.slug == null) { throw Error('user.slug cannot be null'); }

		return new User(
			user.id,
			user.userId,
			user.name || user.nicename,
			user.email,
			user.nicename,
			user.slug,
			user.url || '');
	}
}
