<?php

namespace Scarecrow\Customizers;

class MenusCustomizer {
	public static function register() {
		add_action("customize_register", function( $wp_customize ) {
			self::setHeaderMenuOptions($wp_customize);
			self::setSidebarMenuOptions($wp_customize);
			self::setFooterMenuOptions($wp_customize);
		});
	}
	
	private static function setHeaderMenuOptions( $wp_customize ) {
	}
	
	private static function setSidebarMenuOptions( $wp_customize ) {
	}
	
	private static function setFooterMenuOptions( $wp_customize ) {
	}
}
