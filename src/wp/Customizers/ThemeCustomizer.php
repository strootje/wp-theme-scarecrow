<?php

namespace Scarecrow\Customizers;
use Scarecrow\WpTheme;

class ThemeCustomizer {
	private static $section = "theme-scarecrow";

	public static function register() {
		add_action("customize_register", function( $wp_customize ) {
			$wp_customize->add_section(self::$section, [
				"title" => __("Scarecrow Settings", WpTheme::$name)
			]);

			self::setImageProviderOption($wp_customize);
			self::setCaseCategory($wp_customize);
			self::setAboutPageOption($wp_customize);
		});
	}

	private static function setImageProviderOption( $wp_customize ) {
		$wp_customize->add_setting("providers[image]" , [
			"transport" => "postMessage",
			"default" => "https://placekitten.com/g/__width__/__height__"
		]);
	
		$wp_customize->add_control(new \WP_Customize_Control($wp_customize, "providers_image_control", [
			"type" => "select",
			"section" => self::$section,
			"settings" => "providers[image]",
			"label" => __("Image provider", WpTheme::$name),
			"choices" => [
				"https://placekitten.com/__width__/__height__" => __("Placekitten.com", WpTheme::$name),
				"https://placekitten.com/g/__width__/__height__" => __("Placekitten.com (grayscale)", WpTheme::$name),
				"https://dummyimage.com/__width__x__height__/00f.jpg&text=-----" => __("Dummyimage.com", WpTheme::$name)
			]
		]));
	}

	private static function setCaseCategory( $wp_customize ) {
		$wp_customize->add_setting("categories[cases]" , [
			"transport" => "postMessage",
			"default" => 0
		]);
	
		$wp_customize->add_control(new \WP_Customize_Control($wp_customize, "categories_cases_control", [
			"type" => "number",
			"section" => self::$section,
			"settings" => "categories[cases]",
			"label" => __("Cases Category", WpTheme::$name)
		]));

		// $wp_customize->selective_refresh->add_partial("categories[cases]", [
		// 	"selector" => "#about-page .inside",
		// 	"render_callback" => function() {
		// 		$pages = get_theme_mod("pages", []);

		// 		if (!array_key_exists("about", $pages) || $pages["about"] == 0) {
		// 			return "";
		// 		}

		// 		$pageId = $pages["about"];
		// 		$page = get_post($pageId);
		// 		return apply_filters('the_content', $page->post_content);
		// 	}
		// ]);
	}

	private static function setAboutPageOption( $wp_customize ) {
		$wp_customize->add_setting("pages[about]" , [
			"transport" => "postMessage",
			"default" => 0
		]);
	
		$wp_customize->add_control(new \WP_Customize_Control($wp_customize, "pages_about_control", [
			"type" => "dropdown-pages",
			"section" => self::$section,
			"settings" => "pages[about]",
			"label" => __("About page", WpTheme::$name)
		]));

		$wp_customize->selective_refresh->add_partial("pages[about]", [
			"selector" => "#about-page .inside",
			"render_callback" => function() {
				$pages = get_theme_mod("pages", []);

				if (!array_key_exists("about", $pages) || $pages["about"] == 0) {
					return "";
				}

				$pageId = $pages["about"];
				$page = get_post($pageId);
				return apply_filters('the_content', $page->post_content);
			}
		]);
	}
}
