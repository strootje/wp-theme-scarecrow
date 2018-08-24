import Settings from "Models/Settings";
import { WP_FetchSettings_allSettings } from "Entities/Wordpress/WP_FetchSettings";

type WPSettings = WP_FetchSettings_allSettings | null;

export default class {
	static Map( settings: WPSettings ): Settings {
		if (settings == null) { throw Error('settings cannot be null'); }
		if (settings.generalSettingsTitle == null) { throw Error('settings.generalSettingsTitle cannot be null'); }
		if (settings.generalSettingsDescription == null) { throw Error('settings.generalSettingsDescription cannot be null'); }
		if (settings.generalSettingsUrl == null) { throw Error('settings.generalSettingsUrl cannot be null'); }
		if (settings.readingSettingsIsStaticHomepage == null) { throw Error('settings.readingSettingsIsStaticHomepage cannot be null'); }
		if (settings.readingSettingsPageOnFront == null) { throw Error('settings.readingSettingsPageOnFront cannot be null'); }
		if (settings.readingSettingsPageForPosts == null) { throw Error('settings.readingSettingsPageForPosts cannot be null'); }

		return new Settings(
			settings.generalSettingsTitle,
			settings.generalSettingsDescription,
			settings.generalSettingsUrl,
			settings.readingSettingsIsStaticHomepage,
			settings.readingSettingsPageOnFront,
			settings.readingSettingsPageForPosts);
	}
};
