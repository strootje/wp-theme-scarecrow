<?php

require __DIR__ . '/vendor/autoload.php';
use Scarecrow\Exceptions\DependencyNotFoundException;

add_action('after_setup_theme', function() {
	try {
		$theme = new Scarecrow\ThemeMain();
		$theme->setup();

		add_action('init', function() use($theme) {
			$theme->init();
		});
	} catch( DependencyNotFoundException $exc ) {
		echo $exc->getMessage();
		exit;
	}
});
