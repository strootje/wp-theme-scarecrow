
export default class Page {
	private readonly key: string;
	private readonly title: string;

	constructor( id: string, title: string ) {
		this.key = id;
		this.title = title;
	}

	get Key(): string {
		return this.key;
	}

	get Title(): string {
		return this.title;
	}
}
