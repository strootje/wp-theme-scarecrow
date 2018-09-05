<?php

namespace Scarecrow\Customizers;
use Scarecrow\WpTheme;

class ThemeCustomizer {
	public static function register() {
		register_setting("scarecrow", "image_provider", [
			"type" => "string",
			"show_in_rest" => true
		]);
		register_setting("scarecrow", "footer_about", [
			"type" => "integer",
			"show_in_rest" => true
		]);

		add_action("customize_register", function( \WP_Customize_Manager $wp_customize ) {
			$panel = "theme_scarecrow";

			$wp_customize->add_panel($panel, [
				"title" => __("Scarecrow Settings", WpTheme::$name),
				"description" => __("Scarecrow theme settings", WpTheme::$name)
			]);

			self::createProviderSection($wp_customize, $panel);
			self::createFooterSection($wp_customize, $panel);
		});
	}

	private static function createProviderSection( \WP_Customize_Manager $wp_customize, $panel ) {
		$section = $panel . "[providers]";

		$wp_customize->add_section($section, [
			"title" => __("Providers", WpTheme::$name),
			"description" => __("All providers used by the theme", WpTheme::$name),
			"panel" => $panel
		]);

		self::setImageProviderOption($wp_customize, $section);
	}

	private static function createFooterSection( \WP_Customize_Manager $wp_customize, $panel ) {
		$section = $panel . "[footer]";

		$wp_customize->add_section($section, [
			"title" => __("Footer", WpTheme::$name),
			"description" => __("All settings beloning to the footer", WpTheme::$name),
			"panel" => $panel
		]);

		self::setAboutPageOption($wp_customize, $section);
	}

	private static function setImageProviderOption( \WP_Customize_Manager $wp_customize, $section ) {
		$setting = "image_provider";

		$wp_customize->add_setting($setting , [
			"type" => "option",
			"transport" => "postMessage",
			"default" => "https://placekitten.com/g/__width__/__height__",
		]);

		$wp_customize->add_control(new \WP_Customize_Control($wp_customize, "providers_image_control", [
			"type" => "select",
			"section" => $section,
			"settings" => $setting,
			"label" => __("Image provider", WpTheme::$name),
			"description" => __("Used for default thumbnails", WpTheme::$name),
			"choices" => [
				"https://placekitten.com/__width__/__height__" => __("Placekitten.com", WpTheme::$name),
				"https://placekitten.com/g/__width__/__height__" => __("Placekitten.com (grayscale)", WpTheme::$name),
				"https://dummyimage.com/__width__x__height__/00f.jpg&text=-----" => __("Dummyimage.com", WpTheme::$name)
			]
		]));
	}

	private static function setAboutPageOption( \WP_Customize_Manager $wp_customize, $section ) {
		$setting = "footer_about";

		$wp_customize->add_setting($setting, [
			"type" => "option",
			"transport" => "postMessage",
			"default" => 0
		]);

		$wp_customize->add_control(new \WP_Customize_Control($wp_customize, "pages_about_control", [
			"type" => "dropdown-pages",
			"section" => $section,
			"settings" => $setting,
			"label" => __("About page", WpTheme::$name),
			"description" => __("Page shown above the footer", WpTheme::$name),
			"allow_addition" => true
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
