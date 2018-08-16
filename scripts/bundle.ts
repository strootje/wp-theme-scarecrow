import { createWriteStream } from 'fs';
import Paths from './../src/utils/Paths';
import * as Archiver from 'archiver';

const opts: Archiver.ArchiverOptions = {
};

const output = createWriteStream(Paths.Dist('wp-theme-scarecrow.zip'));
const archive = Archiver('zip', opts);

archive.pipe(output);

// javascript webpack output
archive.directory(Paths.Dist(), 'dist');

// PHP source
archive.directory(Paths.Root('vendor'), 'vendor');
archive.directory(Paths.Src('wp'), Paths.WpSrc());
archive.glob('*.php');
archive.glob('*.css');
archive.glob('*.md');

archive.finalize();
