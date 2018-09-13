export default class {
	private readonly categoryId: number;
	private readonly name: string;
	private readonly link: string;
	private readonly count: number;

	constructor(categoryId: number, name: string, link: string, count: number) {
		this.categoryId = categoryId;
		this.name = name;
		this.link = link;
		this.count = count;
	}

	get CategoryId(): number {
		return this.categoryId;
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
