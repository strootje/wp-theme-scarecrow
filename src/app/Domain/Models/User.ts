import CommentAuthor from 'Models/CommentAuthor';

export default class User extends CommentAuthor {
	private readonly key: string;
	private readonly userId: number;
	private readonly slug: string;
	private readonly nicename: string;

	constructor(id: string, userId: number, name: string, email: string, nicename: string, slug: string, url: string) {
		super(name, email, url);

		this.key = id;
		this.userId = userId;
		this.nicename = nicename;
		this.slug = slug;
	}

	get Key(): string {
		return this.key;
	}

	get UserId(): number {
		return this.userId;
	}

	get Slug(): string {
		return this.slug;
	}

	get Nicename(): string {
		return this.nicename;
	}
}
