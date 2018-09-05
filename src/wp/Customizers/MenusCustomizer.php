<?php

namespace Scarecrow\Customizers;

class MenusCustomizer {
	public static function register() {
		add_action("customize_register", function( \WP_Customize_Manager $wp_customize ) {
			self::setHeaderMenuOptions($wp_customize);
			self::setSidebarMenuOptions($wp_customize);
			self::setFooterMenuOptions($wp_customize);
		});
	}

	private static function setHeaderMenuOptions( \WP_Customize_Manager $wp_customize ) {
	}

	private static function setSidebarMenuOptions( \WP_Customize_Manager $wp_customize ) {
	}

	private static function setFooterMenuOptions( \WP_Customize_Manager $wp_customize ) {
	}
}
