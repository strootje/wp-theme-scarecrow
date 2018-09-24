import NoNull from 'Helpers/NoNull';
import Comment from 'Models/Comment';
import Paged from 'Models/Paged';
import {
	WP_FetchCommentsByPostId_postBy, WP_FetchCommentsByPostId_postBy_comments,
	WP_FetchCommentsByPostId_postBy_comments_edges_node
} from 'Queries/Wordpress/__generated__/WP_FetchCommentsByPostId';
import {
	WP_PostCommentWithPostId_createComment, WP_PostCommentWithPostId_createComment_comment
} from 'Queries/Wordpress/__generated__/WP_PostCommentWithPostId';

type WPComment = null
	| WP_FetchCommentsByPostId_postBy_comments_edges_node
	| WP_PostCommentWithPostId_createComment_comment;
type WPComments = null
	| WP_FetchCommentsByPostId_postBy_comments;
type WPPost = null
	| WP_FetchCommentsByPostId_postBy;

export default class CommentMapper {
	static MapAfterCreate(comment: WP_PostCommentWithPostId_createComment | null): Comment {
		if (comment == null) { throw Error('comment cannot be null'); }
		if (comment.comment == null) { throw Error('comment.comment cannot be null'); }

		return this.Map(comment.comment);
	}

	static Map(comment: WPComment): Comment {
		if (comment == null) { throw Error('comment cannot be null'); }
		if (comment.date == null) { throw Error('comment.date cannot be null'); }
		if (comment.content == null) { throw Error('comment.content cannot be null'); }

		return new Comment(
			comment.id,
			new Date(comment.date),
			comment.content);
	}

	static MapAll(comments: WPComments): Paged<Comment>[] {
		if (comments == null) { throw Error('comments cannot be null'); }
		if (comments.edges == null) { throw Error('comments.edges cannot be null'); }

		const results: Paged<Comment>[] = [];
		NoNull(comments.edges).forEach(comment => results.push({ cursor: comment.cursor, node: this.Map(comment.node) }));

		return results;
	}

	static MapAllFromPost(post: WPPost): Paged<Comment>[] {
		if (post == null) { throw Error('post cannot be null'); }
		if (post.comments == null) { throw Error('post.comments cannot be null'); }

		return this.MapAll(post.comments);
	}
}
