<?php

namespace Scarecrow\Helpers;

class ImageSizes {
	public static $_sizes;

	public static function getAll() {
		global $_wp_additional_image_sizes;

		if (isset(self::$_sizes)) {
			return self::$_sizes;
		}

		self::$_sizes = [];
		foreach(get_intermediate_image_sizes() as $size) {
			if (in_array($size, ['thumbnail', 'medium', 'medium_large', 'large'])) {
				self::$_sizes[$size]['width'] = get_option("{$size}_size_w");
				self::$_sizes[$size]['height'] = get_option("{$size}_size_h");
				self::$_sizes[$size]['crop'] = ((bool)get_option("{$size}_crop"));
			} elseif (isset($_wp_additional_image_sizes[$size])) {
				self::$_sizes[$size] = [
					'width' => $_wp_additional_image_sizes[$size]['width'],
					'height' => $_wp_additional_image_sizes[$size]['height'],
					'crop' => $_wp_additional_image_sizes[$size]['crop'],
				];
			}
		}
	
		return self::$_sizes;
	}

	public static function get( $name ) {
		$sizes = self::getAll();
	
		if (isset($sizes[$name])) {
			return $sizes[$name];
		}
	
		return false;
	}
}
