<?php

namespace Scarecrow\MenuLocations;
use Scarecrow\WpTheme;

class FooterLocation {
	public static $name = "footer";

	public static function register() {
		register_nav_menu(self::$name, __("Footer Menu", WpTheme::$name)
		);
	}
}
