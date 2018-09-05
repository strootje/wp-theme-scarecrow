
export interface ISettings {
	Title: string
	Description: string
	Url: string

	IsHomepageStatic: boolean
	PageIdOnFront: number
	PageIdForPosts: number

	ProviderForImages: string
	PageIdForFooterAboutSection: number
}

export default class implements ISettings {
	// General Settings
	private readonly title: string;
	private readonly description: string;
	private readonly url: string;

	// Reading Settings
	private readonly isHomepageStatic: boolean;
	private readonly pageIdOnFront: number;
	private readonly pageIdForPosts: number;

	// Scarecrow Settings
	private readonly providerForImages: string;
	private readonly pageIdForFooterAboutSection: number;

	constructor(
		title: string,
		description: string,
		url: string,
		isHomepageStatic: boolean,
		pageIdOnFront: number,
		pageIdForPosts: number,
		providerForImages: string,
		pageIdForFooterAboutSection: number
	) {
		this.title = title;
		this.description = description;
		this.url = url.replace('http://localhost:8080', ''); // TODO: fix this

		this.isHomepageStatic = isHomepageStatic;
		this.pageIdOnFront = pageIdOnFront;
		this.pageIdForPosts = pageIdForPosts;

		this.providerForImages = providerForImages;
		this.pageIdForFooterAboutSection = pageIdForFooterAboutSection;
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

	get PageIdOnFront(): number {
		return this.pageIdOnFront;
	}

	get PageIdForPosts(): number {
		return this.pageIdForPosts;
	}

	get ProviderForImages(): string {
		return this.providerForImages;
	}

	get PageIdForFooterAboutSection(): number {
		return this.pageIdForFooterAboutSection;
	}

	get ToObject(): ISettings {
		return {
			Title: this.Title,
			Description: this.Description,
			Url: this.Url,
			IsHomepageStatic: this.IsHomepageStatic,
			PageIdOnFront: this.PageIdOnFront,
			PageIdForPosts: this.PageIdForPosts,
			ProviderForImages: this.ProviderForImages,
			PageIdForFooterAboutSection: this.PageIdForFooterAboutSection
		};
	}
}
