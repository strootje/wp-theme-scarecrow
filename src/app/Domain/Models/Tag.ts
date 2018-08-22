export default class {
	private readonly key: string
	private readonly name: string;
	private readonly link: string;
	private readonly count: number;

	constructor( id: string, name: string, link?: string, count?: number ) {
		this.key = id;
		this.name = name;
		this.link = link || '';
		this.count = count || 0;
	}

	get Key(): string {
		return this.key;
	}

	get Name(): string {
		return this.name;
	}

	get Link(): string {
		return this.link;
	}

	get Count(): number {
		return this.count;
	}
}
