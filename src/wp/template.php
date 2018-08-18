<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<?php wp_head(); ?>
		<?php print_head_scripts(); ?>
	</head>

	<body <?php body_class(); ?>>
		<div class="app">loading ...</div>
		<?php wp_print_footer_scripts(); ?>
		<?php wp_footer(); ?>
	</body>
</html>
