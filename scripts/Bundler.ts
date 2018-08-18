import { createWriteStream } from 'fs';
import Paths from './../src/app/Assets/Utils/Paths';
import * as Archiver from 'archiver';

interface PackageConfig {
	name: string,
	version: string
}

const config: PackageConfig = require('./../package');

export default class Bundler {
	static OutPath = Paths.Root(`${config.name}-${config.version}.zip`);

	private readonly archive: Archiver.Archiver

	constructor() {
		const output = createWriteStream(Bundler.OutPath);
		this.archive = Archiver('zip', {});
		this.archive.pipe(output);

		this.setupLogging();
		this.addJavascriptSources();
		this.addPhpSources();
		this.addMarkdownSources();
	}

	start() {
		this.archive.finalize();
	}

	private setupLogging() {
		this.archive.on('progress', console.log);
		this.archive.on('warning', console.log);
		this.archive.on('error', console.error);
	}

	private addJavascriptSources() {
		this.archive.directory(Paths.Dist(), 'dist');
	}

	private addPhpSources() {
		this.archive.directory(Paths.Root('vendor'), 'vendor');
		this.archive.directory(Paths.WpSrc(), 'src/wp');
		this.archive.file(Paths.WpSrc('style.css'), { name: 'style.css' });
		this.archive.file(Paths.WpSrc('index.php'), { name: 'index.php' });
		this.archive.file(Paths.WpSrc('functions.php'), { name: 'functions.php' });
	}

	private addMarkdownSources() {
		this.archive.file(Paths.Root('README.md'), { name: 'README.md' });
		this.archive.file(Paths.Root('LICENSE.md'), { name: 'LICENSE.md' });
	}
}
