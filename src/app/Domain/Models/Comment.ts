import CommentAuthor from 'Models/CommentAuthor';

type ParentCommentType = Comment | null;

export default class Comment {
	private readonly key: string;
	private readonly date: Date;
	private readonly content: string;
	private readonly author: CommentAuthor;
	private readonly parent: ParentCommentType;

	constructor(key: string, date: Date, content: string, author: CommentAuthor, parent: ParentCommentType) {
		this.key = key;
		this.date = date;
		this.content = content;
		this.author = author;
		this.parent = parent;
	}

	get Key(): string {
		return this.key;
	}

	get Date(): Date {
		return this.date;
	}

	get Content(): string {
		return this.content;
	}

	get Author(): CommentAuthor {
		return this.author;
	}

	get Parent(): ParentCommentType {
		return this.parent;
	}
}
