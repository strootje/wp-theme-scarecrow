<?php

namespace Scarecrow\Locales;
use Scarecrow\WpTheme;

class Localizer {
	public static function getStrings() {
		return [
			"archive" => self::getArchiveStrings(),
			"footer" => self::getFooterStrings(),
			"readMoreLink" => self::getReadMoreLinkStrings(),
			"sidebar" => self::getSidebarStrings()
		];
	}

	private static function getArchiveStrings() {
		return [
			"posts" => [
				"header" => __("Posts", WpTheme::$name)
			]
		];
	}

	private static function getFooterStrings() {
		return [
			"tags" => [
				"header" => __("Tags", WpTheme::$name)
			]
		];
	}

	private static function getReadMoreLinkStrings() {
		return [
			"button" => [
				"text" => __("Read More", WpTheme::$name)
			]
		];
	}

	private static function getSidebarStrings() {
		return [
			"newsletter" => [
				"header" => __("Newsletter Signup", WpTheme::$name),
				"name" => __("Name ...", WpTheme::$name),
				"email" => __("Email ...", WpTheme::$name),
				"submit" => __("Subscribe", WpTheme::$name)
			]
		];
	}
}
