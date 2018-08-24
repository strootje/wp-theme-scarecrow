export default class {
	private readonly key: string
	private readonly postId: number;
	private readonly title: string;
	private readonly uri: string;

	constructor( id: string, postId: number, title: string, uri: string ) {
		this.key = id;
		this.postId = postId;
		this.title = title;
		this.uri = uri;
	}

	get Key(): string {
		return this.key;
	}

	get PostId(): number {
		return this.postId;
	}

	get Title(): string {
		return this.title;
	}

	get Uri(): string {
		return this.uri;
	}
}
