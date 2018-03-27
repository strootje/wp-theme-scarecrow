<?php

namespace Scarecrow\MenuLocations;
use Scarecrow\WpTheme;

class HeaderLocation {
	public static $name = "header";
	public static function register() {
		register_nav_menu(self::$name, __("Header Menu", WpTheme::$name)
		);
	}
}
