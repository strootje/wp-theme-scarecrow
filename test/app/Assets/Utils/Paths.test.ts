import { assert as Assert } from 'chai';

import Paths from '../../../../src/app/Assets/Utils/Paths';

describe('Paths', () => {

	it('Root() should return /', () => {
		// Arrange & Act
		const path = Paths.Root();

		// Assert
		Assert.equal(path, '/');
	});

	it('Root(test) should return /test', () => {
		// Arrange & Act
		const path = Paths.Root('test');

		// Assert
		Assert.equal(path, '/test');
	});

	it('Src() should return /src/app', () => {
		// Arrange & Act
		const path = Paths.Src();

		// Assert
		Assert.equal(path, '/src/app');
	});

	it('Src(test) should return /src/app/test', () => {
		// Arrange & Act
		const path = Paths.Src('test');

		// Assert
		Assert.equal(path, '/src/app/test');
	});

	it('WpSrc() should return /src/wp', () => {
		// Arrange & Act
		const path = Paths.WpSrc();

		// Assert
		Assert.equal(path, '/src/wp');
	});

	it('WpSrc(test) should return /src/wp/test', () => {
		// Arrange & Act
		const path = Paths.WpSrc('test');

		// Assert
		Assert.equal(path, '/src/wp/test');
	});

	it('Dist() should return /dist', () => {
		// Arrange & Act
		const path = Paths.Dist();

		// Assert
		Assert.equal(path, '/dist');
	});

	it('Dist(test) should return /dist/test', () => {
		// Arrange & Act
		const path = Paths.Dist('test');

		// Assert
		Assert.equal(path, '/dist/test');
	});

});
