import Thumbnails from "Models/Thumbnails";


export default class {
	private readonly key: string;
	private readonly pageId: number;
	private readonly title: string;
	private readonly uri: string;
	private readonly content: string;

	private readonly thumbnails: Thumbnails;

	constructor( id: string, pageId: number, title: string, uri: string, content: string, thumbnails: Thumbnails ) {
		this.key = id;
		this.pageId = pageId;
		this.title = title;
		this.uri = uri;
		this.content = content;
		this.thumbnails = thumbnails;
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

	get Content(): string {
		return this.content;
	}

	get Thumbnails(): Thumbnails {
		return this.thumbnails;
	}
}
