<?php

namespace Scarecrow\MenuLocations;
use Scarecrow\WpTheme;

class SitemapLocation {
	public static $name = "sitemap";

	public static function register() {
		register_nav_menu(self::$name, __("Sitemap Menu", WpTheme::$name)
		);
	}
}
