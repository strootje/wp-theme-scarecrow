<?php

namespace Scarecrow\Customizers;

class IdentityCustomizer {
	public static function register() {
		add_action("customize_register", function( $wp_customize ) {
			self::setBlognameOption($wp_customize);
			self::setBlogdescriptionOption($wp_customize);
			self::setCustomLogoOption($wp_customize);
		});
	}

	private static function setBlognameOption( $wp_customize ) {
		$wp_customize->get_setting('blogname')->transport = 'postMessage';

		$wp_customize->selective_refresh->add_partial('blogname', [
			'selector' => '.logo .inner .title',
			'render_callback' => function() {
				return get_bloginfo('name');
			}
		]);
	}

	private static function setBlogdescriptionOption( $wp_customize ) {
		$wp_customize->get_setting('blogdescription')->transport = 'postMessage';

		$wp_customize->selective_refresh->add_partial('blogdescription', [
			'selector' => '.logo .inner .tagline',
			'render_callback' => function() {
				return get_bloginfo('description');
			}
		]);
	}

	private static function setCustomLogoOption( $wp_customize ) {
		$wp_customize->get_setting('custom_logo')->transport = 'postMessage';

		$wp_customize->selective_refresh->add_partial('custom_logo', [
			'selector' => '.logo',
			'render_callback' => function() {
				if (!has_custom_logo()) {
					return false;
				}
		
				return get_custom_logo();
			}
		]);
	}
}
