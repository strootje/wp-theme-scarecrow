import Thumbnails from "Models/Thumbnails";
import Category from "Models/Category";

export default class {
	private readonly key: string
	private readonly postId: number;
	private readonly title: string;
	private readonly uri: string;
	private readonly categories: Category[];
	private readonly thumbnails: Thumbnails;

	constructor( id: string, postId: number, title: string, uri: string, categories: Category[], thumbnails: Thumbnails ) {
		this.key = id;
		this.postId = postId;
		this.title = title;
		this.uri = uri;
		this.categories = categories;
		this.thumbnails = thumbnails;
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

	get Categories(): Category[] {
		return this.categories;
	}

	get Thumbnails(): Thumbnails {
		return this.thumbnails;
	}
}
