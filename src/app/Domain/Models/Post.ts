import Category from 'Models/Category';
import Thumbnails from 'Models/Thumbnails';

export default class {
	private readonly key: string
	private readonly postId: number;
	private readonly title: string;
	private readonly date: Date;
	private readonly link: string;
	private readonly content: string;
	private readonly categories: Category[];
	private readonly thumbnails: Thumbnails;

	constructor(id: string, postId: number, title: string, date: Date, link: string, content: string, categories: Category[], thumbnails: Thumbnails) {
		this.key = id;
		this.postId = postId;
		this.title = title;
		this.date = date;
		this.link = link;
		this.content = content;
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

	get Date(): Date {
		return this.date;
	}

	get Link(): string {
		return this.link;
	}

	get Content(): string {
		return this.content;
	}

	get ShortContent(): string {
		const moreTag = '<!--more-->';
		const moreTagIndex = this.content.indexOf(moreTag);

		return moreTagIndex > 0 ? this.content.substring(0, moreTagIndex) : this.Content;
	}

	get Categories(): Category[] {
		return this.categories;
	}

	get Thumbnails(): Thumbnails {
		return this.thumbnails;
	}
}
