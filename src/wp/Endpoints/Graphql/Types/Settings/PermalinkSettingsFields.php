<?php

namespace Scarecrow\Endpoints\Graphql\Types\Settings;
use \WPGraphQL\Types;

class PermalinkSettingsFields {
	public static function addFields( $fields ) {
		$fields = self::addPermalinkStructureField($fields);
		$fields = self::addCategoryBaseField($fields);
		$fields = self::addTagBaseField($fields);
		return $fields;
	}

	public static function addGlobalFields( $fields ) {
		$fields = self::addPermalinkStructureField($fields, true);
		$fields = self::addCategoryBaseField($fields, true);
		$fields = self::addTagBaseField($fields, true);
		return $fields;
	}

	private static function addPermalinkStructureField( $fields, $prepend = false ) {
		$fields[($prepend ? 'permalinkSettingsP' : 'p') . 'ermalinkStructure'] = [
			'type' => \WPGraphQL\Types::string(),
			'resolve' => function( $post, $args, $context, $info ) {
				return get_option("permalink_structure", "/post/%postname%");
			}
		];

		return $fields;
	}

	private static function addCategoryBaseField( $fields, $prepend = false ) {
		$fields[($prepend ? 'permalinkSettingsC' : 'c') . 'ategoryBase'] = [
			'type' => \WPGraphQL\Types::string(),
			'resolve' => function( $post, $args, $context, $info ) {
				return get_option("category_base", "");
			}
		];

		return $fields;
	}

	private static function addTagBaseField( $fields, $prepend = false ) {
		$fields[($prepend ? 'permalinkSettingsT' : 't') . 'agBase'] = [
			'type' => \WPGraphQL\Types::string(),
			'resolve' => function( $post, $args, $context, $info ) {
				return get_option("tag_base", "");
			}
		];

		return $fields;
	}
}
