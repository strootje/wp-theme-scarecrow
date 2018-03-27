<?php

require __DIR__ . "/vendor/autoload.php";
use Scarecrow\WpTheme;

$theme = new WpTheme();
add_action("wp_enqueue_scripts", [ $theme, "scripts" ], 90);
add_action("after_setup_theme", [ $theme, 'setup' ]);
add_action("init", [ $theme, 'register' ]);
