<?php

namespace Scarecrow\PostTypes;
use Scarecrow\WpTheme;

class ProjectType {
	public static $name = "project";

	public static function register() {
		register_post_type(self::$name, [
			"public" => true,
			"labels" => [
				"name" => __("Projects", WpTheme::$name)
			],
			"menu_position" => 6,
			"menu_icon" => "dashicons-book",
			"register_meta_box_cb" => [ get_called_class(), 'callback' ],

			"taxonomies" => [
				"category",
				"post_tag"
			],
	
			"supports" => [
				"title",
				"thumbnail",
				"editor",
				"revisions"
			],
	
			"rewrite" => [
				"with_front" => false,
				"slug" => "projects"
			],
	
			"show_in_rest" => true,
			"show_in_graphql" => true,
			"graphql_single_name" => "project",
			"graphql_plural_name" => "projects"
		]);
	}

	public static function callback() {
		add_meta_box(
			"repo",
			"Repository",
			function() { echo "Hello, Wrold!"; },
			"project",
			"side"
		);
	}
}
