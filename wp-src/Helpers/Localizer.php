<?php

namespace Scarecrow\Helpers;
use Scarecrow\ThemeMain;

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
				"header" => __("Tags", ThemeMain::$name)
			]
		];
	}

	private static function getReadMoreLinkStrings() {
		return [
			"button" => [
				"text" => __("Read More", ThemeMain::$name)
			]
		];
	}

	private static function getSidebarStrings() {
		return [
			"newsletter" => [
				"header" => __("Newsletter Signup", ThemeMain::$name)
			]
		];
	}
}
