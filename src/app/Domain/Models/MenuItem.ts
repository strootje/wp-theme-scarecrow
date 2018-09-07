
export default class {
	private readonly key: string;
	private readonly label: string;
	private readonly link: string;
	private readonly target: string;
	private readonly cssClasses: string[];

	constructor( key: string, label: string, link: string, target: string, cssClasses: string[] ) {
		this.key = key;
		this.label = label;
		this.link = link;
		this.target = target;
		this.cssClasses = cssClasses;
	}

	get Key(): string {
		return this.key;
	}

	get Label(): string {
		return this.label;
	}

	get Link(): string {
		return this.link;
	}

	get Target(): string {
		return this.target;
	}

	get CssClasses(): string {
		return this.cssClasses.join(' ');
	}
}
