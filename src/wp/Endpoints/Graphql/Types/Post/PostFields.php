<?php

namespace Scarecrow\Endpoints\Graphql\Types\Post;
use Scarecrow\Helpers\ImageSizes;
use \WPGraphQL\Types;

class PostFields {
	public static function addFields( $fields ) {
		$fields = self::addTypeField($fields);
		$fields = self::addFormatField($fields);
		$fields = self::addThumbnailFields($fields);

		return $fields;
	}

	private static function addTypeField( $fields ) {
		$fields['type'] = [
			'type' => \WPGraphQL\Types::string(),
			'resolve' => function( \WP_Post $post, $args, $context, $info ) {
				return $post->post_type;
			}
		];

		return $fields;
	}

	private static function addFormatField( $fields ) {
		$fields['format'] = [
			'type' => \WPGraphQL\Types::string(),
			'resolve' => function( \WP_Post $post, $args, $context, $info ) {
				return get_post_format($post);
			}
		];

		return $fields;
	}

	private static function addThumbnailFields( $fields ) {
		$sizes = ImageSizes::getAll();
		foreach($sizes as $name => $size) {
			$fields[$name] = [
				'type' => \WPGraphQL\Types::string(),
				'resolve' => function( \WP_Post $post, $args, $context, $info ) use( $name, $size ) {
					$template = get_theme_mod('providers[image]', 'https://placekitten.com/g/__width__/__height__');
					$image = get_the_post_thumbnail_url($post, $name);
					return $image ?: str_replace([ '__width__', '__height__' ], [ $size['width'], $size['height'] ], $template);
				}
			];
		}

		return $fields;
	}

	public static function addQueryArgs( $fields ) {
		$fields = self::addTypeInArg($fields);
		return $fields;
	}

	private static function addTypeInArg( $fields ) {
		$fields["typeIn"] = [
			"type" => Types::list_of(Types::string()),
		];

		return $fields;
	}

	public static function filterQueryArgs( $query, $value, $args, $context, $info ) {
		$query = self::addPostTypeFilter($query, $value, $args, $context, $info);
		return $query;
	}

	private static function addPostTypeFilter( $query, $value, $args, $context, $info ) {
		if (isset($args["where"]["typeIn"])) {
			$query["post_type"] = $args["where"]["typeIn"];
		}

		return $query;
	}
}
