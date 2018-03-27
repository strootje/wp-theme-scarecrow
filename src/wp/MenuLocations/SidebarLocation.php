<?php

namespace Scarecrow\MenuLocations;
use Scarecrow\WpTheme;

class SidebarLocation {
	public static $name = "sidebar";

	public static function register() {
		register_nav_menu(self::$name, __("Sidebar Menu", WpTheme::$name)
		);
	}
}
