export default class CommentAuthor {
	private readonly name: string;
	private readonly email: string;
	private readonly url: string;

	constructor(name: string, email: string, url: string) {
		this.name = name;
		this.email = email;
		this.url = url;
	}

	get Name(): string {
		return this.name;
	}

	get Email(): string {
		return this.email;
	}

	get Url(): string {
		return this.url;
	}
}
