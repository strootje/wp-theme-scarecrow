
export interface ISettings {
	Title: string
	Description: string
	Url: string

	IsHomepageStatic: boolean
	PageIdOnFront: number
	PageIdForPosts: number

	PermalinkStructure: string
	CategoryBase: string
	TagBase: string

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

	// Permalink Settings
	private readonly permalinkStructure: string;
	private readonly categoryBase: string;
	private readonly tagBase: string;

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
		permalinkStructure: string,
		categoryBase: string,
		tagBase: string,
		providerForImages: string,
		pageIdForFooterAboutSection: number
	) {
		this.title = title;
		this.description = description;
		this.url = url.replace('http://localhost:8080', ''); // TODO: fix this

		this.isHomepageStatic = isHomepageStatic;
		this.pageIdOnFront = pageIdOnFront;
		this.pageIdForPosts = pageIdForPosts;

		this.permalinkStructure = permalinkStructure;
		this.categoryBase = categoryBase;
		this.tagBase = tagBase;

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

	get PermalinkStructure(): string {
		return this.permalinkStructure;
	}

	get CategoryBase(): string {
		return this.categoryBase;
	}

	get TagBase(): string {
		return this.tagBase;
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
			PermalinkStructure: this.PermalinkStructure,
			CategoryBase: this.CategoryBase,
			TagBase: this.TagBase,
			ProviderForImages: this.ProviderForImages,
			PageIdForFooterAboutSection: this.PageIdForFooterAboutSection
		};
	}
}
