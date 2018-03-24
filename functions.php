<?php

require __DIR__ . "/vendor/autoload.php";
use Scarecrow\Exceptions\DependencyNotFoundException;

add_action("after_setup_theme", function() {
	try {
		$theme = new Scarecrow\ThemeMain();
		$theme->setup();

		add_action("wp_enqueue_scripts", [ $theme, 'enqueueScripts' ]);
		add_action("init", [ $theme, 'init' ]);
	} catch( DependencyNotFoundException $exc ) {
		echo $exc->getMessage();
		exit;
	}
});
