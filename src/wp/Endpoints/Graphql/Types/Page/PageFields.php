<?php

namespace Scarecrow\Endpoints\Graphql\Types\Page;
use Scarecrow\Helpers\ImageSizes;
use \WPGraphQL\Types;

class PageFields {
	public static function addFields( $fields ) {
		$fields = self::addThumbnailFields($fields);
		return $fields;
	}

	private static function addThumbnailFields( $fields ) {
		$sizes = ImageSizes::getAll();
		foreach($sizes as $name => $size) {
			$fields[$name] = [
				'type' => \WPGraphQL\Types::string(),
				'resolve' => function( \WP_Post $post, $args, $context, $info ) use( $name, $size ) {
					$template = get_theme_mod('theme[scarecrow][providers][image]', 'https://placekitten.com/g/__width__/__height__');
					$image = get_the_post_thumbnail_url($post, $name);
					return $image ?: str_replace([ '__width__', '__height__' ], [ $size['width'], $size['height'] ], $template);
				}
			];
		}

		return $fields;
	}
}
