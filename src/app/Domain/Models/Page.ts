
export default class Page {
	private readonly key: string;
	private readonly pageId: number;
	private readonly title: string;
	private readonly uri: string;

	constructor( id: string, pageId: number, title: string, uri: string ) {
		this.key = id;
		this.pageId = pageId;
		this.title = title;
		this.uri = uri;
	}

	get Key(): string {
		return this.key;
	}

	get PageId(): number {
		return this.pageId;
	}

	get Title(): string {
		return this.title;
	}

	get Uri(): string {
		return this.uri;
	}
}
