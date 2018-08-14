import { resolve } from 'path';

export default class {
	static Src( ...paths: string[] ): string {
		return resolve(__dirname, '..', 'app', ...paths);
	}

	static Dist( ...paths: string[] ): string {
		return resolve(__dirname, '..', '..', 'dist', ...paths);
	}
}
