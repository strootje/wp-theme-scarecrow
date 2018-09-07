<?php

namespace Scarecrow;
use Scarecrow\Customizers\IdentityCustomizer;
use Scarecrow\Customizers\MenusCustomizer;
use Scarecrow\Customizers\ThemeCustomizer;
use Scarecrow\Endpoints\Graphql\GraphqlEndpoint;
use Scarecrow\Endpoints\v1\ThemeEndpoint;
use Scarecrow\Locales\Localizer;
use Scarecrow\MenuLocations\FooterLocation;
use Scarecrow\MenuLocations\HeaderLocation;
use Scarecrow\MenuLocations\SidebarLocation;
use Scarecrow\MenuLocations\SitemapLocation;

class WpTheme {
	public static $name;
	public static $version;
	public static $support;
	public static $registers;

	public function __construct() {
		$theme = wp_get_theme();
		self::$name = $theme->Name;
		self::$version = $theme->Version;

		self::$support = [
			"post-formats" => [ "gallery", "link", "image", "quote", "video", "audio" ],
			"post-thumbnails" => [ "post" ],
			"custom-logo" => [ "width" => 300, "height" => 80 ],
			"html5" => [ "search-form" ],
			"title-tag" => []
		];

		self::$registers = [
			// Customizers
			IdentityCustomizer::class,
			MenusCustomizer::class,
			ThemeCustomizer::class,

			// Endpoints
			GraphqlEndpoint::class,
			ThemeEndpoint::class,

			// MenuLocations
			HeaderLocation::class,
			FooterLocation::class,
			SidebarLocation::class,
			SitemapLocation::class
		];
	}

	public function scripts() {
		$path = get_template_directory_uri();

		wp_enqueue_style("app.fonts", "//fonts.googleapis.com/css?family=Courgette|Righteous|Roboto", [], null);
		wp_enqueue_style("app.icons", "//use.fontawesome.com/releases/v5.2.0/css/all.css", [], null);
		wp_enqueue_style("app.styles", "{$path}/dist/assets/css/app.bundle.css", [ "normalize.css", "skeleton.css", "app.fonts", "app.icons" ], self::$version);

		wp_enqueue_script("app.bundle", "{$path}/dist/assets/js/app.bundle.js", [ "app.vendor" ], self::$version, true);
		wp_enqueue_script("app.vendor", "{$path}/dist/assets/js/app.vendor.js", [], self::$version, true);

		wp_localize_script("app.bundle", "theme", ThemeEndpoint::getOptions([]));
		wp_localize_script("app.bundle", "locale", Localizer::getStrings());
	}

	public function setup() {
		foreach(self::$support as $feature => $args) {
			add_theme_support($feature, $args);
		}

		update_option("thumbnail_size_w", 220);
		update_option("thumbnail_size_h", 160);
		add_image_size("thumbnail_hero", 690, 240, true);
		add_image_size("thumbnail_banner", 220, 120, true);
		add_image_size("thumbnail_banner_hero", 420, 200, true);

		foreach(self::$registers as $register) {
			if (method_exists($register, "setup")) {
				$register::setup();
			}
		}
	}

	public function register() {
		// Register stuff like postTypes, customizers, etc...
		foreach(self::$registers as $register) {
			if (method_exists($register, "register")) {
				$register::register();
			}
		}

		register_setting("theme", "logo");
	}
}
