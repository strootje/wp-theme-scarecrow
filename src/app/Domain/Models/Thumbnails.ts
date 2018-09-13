
export default class Thumbnails {
	private readonly normal: string;

	constructor(normal: string) {
		this.normal = normal;
	}

	get Normal(): string {
		return this.normal;
	}
}
