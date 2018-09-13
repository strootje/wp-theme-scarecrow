import { resolve } from 'path';

export default class {
	static Root(...paths: string[]): string {
		return resolve(__dirname, '..', '..', '..', '..', ...paths);
	}

	static Src(...paths: string[]): string {
		return this.Root('src', 'app', ...paths);
	}

	static WpSrc(...paths: string[]): string {
		return this.Root('src', 'wp', ...paths);
	}

	static Dist(...paths: string[]): string {
		return this.Root('dist', ...paths);
	}
}
