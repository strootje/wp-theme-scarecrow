export default class {
	private readonly key: string
	private readonly name: string;

	constructor( id: string, name: string ) {
		this.key = id;
		this.name = name;
	}

	get Key(): string {
		return this.key;
	}

	get Name(): string {
		return this.name;
	}
}
