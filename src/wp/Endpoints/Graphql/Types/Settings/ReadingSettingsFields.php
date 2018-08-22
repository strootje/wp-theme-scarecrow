<?php

namespace Scarecrow\Endpoints\Graphql\Types\Settings;
use \WPGraphQL\Types;

class ReadingSettingsFields {
	public static function addFields( $fields ) {
		$fields = self::addIsStaticHomepageField($fields);
		return $fields;
	}

	public static function addGlobalFields( $fields ) {
		$fields = self::addIsStaticHomepageField($fields, true);
		return $fields;
	}

	private static function addIsStaticHomepageField( $fields, $prepend = false ) {
		$fields[($prepend ? 'readingSettingsI' : 'i') . 'sStaticHomepage'] = [
			'type' => \WPGraphQL\Types::boolean(),
			'resolve' => function( $post, $args, $context, $info ) {
				// possible values: [ "posts", "page" ]
				return get_option("show_on_front", "posts") == "page";
			}
		];

		return $fields;
	}
}
