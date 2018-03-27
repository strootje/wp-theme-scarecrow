<?php

namespace Scarecrow\Locales;
use Scarecrow\WpTheme;

class Localizer {
	public static function getStrings() {
		return [
			"footer" => self::getFooterStrings(),
			"readMoreLink" => self::getReadMoreLinkStrings(),
			"sidebar" => self::getSidebarStrings()
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
				"header" => __("Newsletter Signup", WpTheme::$name)
			]
		];
	}
}
