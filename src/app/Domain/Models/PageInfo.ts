export default class PageInfo {
	private hasPreviousPage: boolean;
	private hasNextPage: boolean;

	constructor( hasPreviousPage: boolean, hasNextPage: boolean ) {
		this.hasPreviousPage = hasPreviousPage;
		this.hasNextPage = hasNextPage;
	}

	get HasPreviousPage(): boolean {
		return this.hasPreviousPage;
	}

	get HasNextPage(): boolean {
		return this.hasNextPage;
	}

	Update( pageInfo: PageInfo ) {
		this.hasPreviousPage = pageInfo.HasPreviousPage;
		this.hasNextPage = pageInfo.HasNextPage;
	}
}
