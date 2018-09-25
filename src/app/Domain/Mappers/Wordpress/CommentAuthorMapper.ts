import CommentAuthor from 'Models/CommentAuthor';
import {
	WP_FetchCommentsByPostId_postBy_comments_edges_node_author_CommentAuthor,
	WP_FetchCommentsByPostId_postBy_comments_edges_node_author_User
} from 'Queries/Wordpress/__generated__/WP_FetchCommentsByPostId';
import {
	WP_PostCommentWithPostId_createComment_comment_parent_author_CommentAuthor,
	WP_PostCommentWithPostId_createComment_comment_parent_author_User
} from 'Queries/Wordpress/__generated__/WP_PostCommentWithPostId';

type WPCommentAuthor =
	| WP_FetchCommentsByPostId_postBy_comments_edges_node_author_CommentAuthor
	| WP_PostCommentWithPostId_createComment_comment_parent_author_CommentAuthor;
type WPCommentUser =
	| WP_FetchCommentsByPostId_postBy_comments_edges_node_author_User
	| WP_PostCommentWithPostId_createComment_comment_parent_author_User;
type WPCommentAuthorTypes =
	| WPCommentAuthor
	| WPCommentUser;

export default class CommentAuthorMapper {
	static Map(author: WPCommentAuthorTypes): CommentAuthor {
		if (author == null) { throw Error('author cannot be null'); }

		if (author.__typename == 'CommentAuthor') {
			return this.MapCommentAuthor(author);
		} else if (author.__typename == 'User') {
			return this.MapUser(author);
		} else {
			throw Error('type author not supported');
		}
	}

	private static MapCommentAuthor(author: WPCommentAuthor): CommentAuthor {
		if (author.name == null) { throw Error('author.name cannot be null'); }
		if (author.email == null) { throw Error('author.email cannot be null'); }

		return new CommentAuthor(
			author.name,
			author.email,
			author.url || '');
	}

	private static MapUser(author: WPCommentUser): CommentAuthor {
		throw Error('type author`User` not supported');
	}
}
