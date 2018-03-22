<?php

namespace Scarecrow\Customizers;
use Scarecrow\ThemeMain;

class ColorCustomizer {
	private static $section = "colors";

	public static function register() {
		add_action("customize_register", function( $wp_customize ) {
			self::setDarkThemeOption($wp_customize);
			self::setPrimaryColorLighterOption($wp_customize);
			self::setPrimaryColorLightOption($wp_customize);
			self::setPrimaryColorOption($wp_customize);
			self::setPrimaryColorDarkOption($wp_customize);
			self::setPrimaryColorDarkerOption($wp_customize);
		});
	}

	private static function setDarkThemeOption( $wp_customize ) {
		$wp_customize->add_setting("colors[dark]" , [
			"default" => false
		]);
	
		$wp_customize->add_control(new \WP_Customize_Control($wp_customize, "colors_dark_control", [
			"type" => "checkbox",
			"section" => self::$section,
			"settings" => "colors[dark]",
			"label" => __("Dark Theme", ThemeMain::$name)
		]));
	}

	private static function setColorOption( $wp_customize, $setting, $label ) {
		$wp_customize->add_setting($setting , [
			"default" => false
		]);

		$wp_customize->add_control(new \WP_Customize_Color_Control($wp_customize, "{$setting}_control", [
			"section" => self::$section,
			"settings" => $setting,
			"label" => __($label, ThemeMain::$name)
		]));
	}

	private static function setPrimaryColorLighterOption( $wp_customize ) {
		self::setColorOption($wp_customize, "colors[primary][lighter]", "Primary Color (lighter)");
	}

	private static function setPrimaryColorLightOption( $wp_customize ) {
		self::setColorOption($wp_customize, "colors[primary][light]", "Primary Color (light)");
	}

	private static function setPrimaryColorOption( $wp_customize ) {
		self::setColorOption($wp_customize, "colors[primary][base]", "Primary Color");
	}

	private static function setPrimaryColorDarkOption( $wp_customize ) {
		self::setColorOption($wp_customize, "colors[primary][dark]", "Primary Color (dark)");
	}

	private static function setPrimaryColorDarkerOption( $wp_customize ) {
		self::setColorOption($wp_customize, "colors[primary][darker]", "Primary Color (darker)");
	}
}
