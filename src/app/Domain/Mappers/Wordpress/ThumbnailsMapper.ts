import Thumbnails from 'Models/Thumbnails';

type WPThumbnails = {
	normal: string | null
};

export default class {
	static Map(thumbnails: WPThumbnails): Thumbnails {
		if (thumbnails == null) { throw Error('thumbnails cannot be null'); }
		if (thumbnails.normal == null) { throw Error('thumbnails.normal cannot be null'); }

		return new Thumbnails(
			thumbnails.normal
		);
	}
}
