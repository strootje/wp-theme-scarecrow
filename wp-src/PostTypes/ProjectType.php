<?php

namespace Scarecrow\PostTypes;
use Scarecrow\ThemeMain;

class ProjectType {
	public static $name;
	private static $options;

	public static function init() {
		self::$name = "project";
		self::$options = [
			"public" => true,
			"labels" => [
				"name" => __("Projects", ThemeMain::$name),
				"singular_name" => __("Project", ThemeMain::$name),
				"add_new_item" => __("Add New Project", ThemeMain::$name),
				"edit_item" => __("Edit Project", ThemeMain::$name)
			],
			"description" => __("A portfolio filled with projects", ThemeMain::$name),
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
		];
	}

	public static function register() {
		register_post_type(self::$name, self::$options);
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
