
export default class {
	// General Settings
	private readonly title: string;
	private readonly description: string;
	private readonly url: string;

	// Reading Settings
	private readonly isHomepageStatic: boolean;

	constructor( title: string, description: string, url: string, isHomepageStatic: boolean ) {
		this.title = title;
		this.description = description;
		// TODO: fix
		this.url = url.replace('http://localhost:8080', '');
		this.isHomepageStatic = isHomepageStatic;
	}

	get Title(): string {
		return this.title;
	}

	get Description(): string {
		return this.description;
	}

	get Url(): string {
		return this.url;
	}

	get IsHomepageStatic(): boolean {
		return this.isHomepageStatic;
	}
}
