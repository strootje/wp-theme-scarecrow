<?php

namespace Scarecrow\Endpoints\Graphql\Types\Settings;
use \WPGraphQL\Types;

class ReadingSettingsFields {
	public static function addFields( $fields ) {
		$fields = self::addIsStaticHomepageField($fields);
		$fields = self::addPageOnFrontField($fields);
		$fields = self::addPageForPostsField($fields);
		return $fields;
	}

	public static function addGlobalFields( $fields ) {
		$fields = self::addIsStaticHomepageField($fields, true);
		$fields = self::addPageOnFrontField($fields, true);
		$fields = self::addPageForPostsField($fields, true);
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

	private static function addPageOnFrontField( $fields, $prepend = false ) {
		$fields[($prepend ? 'readingSettingsP' : 'p') . 'ageOnFront'] = [
			'type' => \WPGraphQL\Types::int(),
			'resolve' => function( $post, $args, $context, $info ) {
				return get_option("page_on_front", 0);
			}
		];

		return $fields;
	}

	private static function addPageForPostsField( $fields, $prepend = false ) {
		$fields[($prepend ? 'readingSettingsP' : 'p') . 'ageForPosts'] = [
			'type' => \WPGraphQL\Types::int(),
			'resolve' => function( $post, $args, $context, $info ) {
				return get_option("page_for_posts", 0);
			}
		];

		return $fields;
	}
}
