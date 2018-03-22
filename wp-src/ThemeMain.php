<?php

namespace Scarecrow;
use Scarecrow\Customizers\ColorCustomizer;
use Scarecrow\Customizers\IdentityCustomizer;
use Scarecrow\Customizers\ThemeCustomizer;
use Scarecrow\Endpoints\v1\ThemeModsEndpoint;
use Scarecrow\Graphql\Graphql;
use Scarecrow\Helpers\DepChecker;
use Scarecrow\PostTypes\ProjectType;
use Scarecrow\PostTypes\RecipeType;

class ThemeMain {
	public static $name;
	public static $version;
	public static $support;

	public function __construct() {
		// See if all deps are active
		self::findDeps();

		// Get theme data from styles.css
		$theme = wp_get_theme();
		self::$name = $theme->Name;
		self::$version = $theme->Version;

		// Init other stuff
		new ProjectType();
		// new RecipeType();

		// Define theme support
		self::$support = [
			"post-formats" => [ "gallery", "link", "image", "quote", "video", "audio" ],
			"post-thumbnails" => [ "post", ProjectType::$name ],
			"custom-logo" => [ "width" => 300, "height" => 80 ],
			"html5" => [ "search-form" ],
			"title-tag" => []
		];
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

		register_nav_menus([
			"header" => __("Header Menu", self::$name),
			"sidebar" => __("Sidebar Menu", self::$name),
			"footer" => __("Footer Menu", self::$name)
		]);
	}

	public function init() {
		// Options
		// ColorCustomizer::register();
		IdentityCustomizer::register();
		ThemeCustomizer::register();

		// Endpoints
		ThemeModsEndpoint::register();

		// Graphql
		Graphql::register();

		// Register post types
		register_post_type(ProjectType::$name, ProjectType::$options);
		// register_post_type(RecipeType::$name, RecipeType::$options);
	}

	private static function findDeps() {
		DepChecker::throwIfNotFound("WPGraphQL");
		// DepChecker::throwIfNotFound("\WPNewsletterApi\Client\ClientFactory");
	}
}
