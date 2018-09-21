export default class Comment {
	private readonly key: string;
	private readonly date: Date;
	private readonly content: string;

	constructor(key: string, date: Date, content: string) {
		this.key = key;
		this.date = date;
		this.content = content;
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
}
