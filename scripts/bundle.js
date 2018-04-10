const { createWriteStream } = require('fs');
const { join } = require('path');
const Archiver = require('archiver');

const baseDir = join(__dirname, '..');
const output = createWriteStream(join(baseDir, 'wp-theme-scarecrow.zip'));
const archive = Archiver('zip', {
});

archive.pipe(output);

// javascript webpack output
archive.directory(join(baseDir, 'dist'), 'dist');

// PHP source
archive.directory(join(baseDir, 'vendor'), join('vendor'));
archive.directory(join(baseDir, 'src', 'wp'), join('src', 'wp'));
archive.glob('*.php');
archive.glob('*.css');
archive.glob('*.md');

archive.finalize();
