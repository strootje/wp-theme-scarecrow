<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<?php wp_head(); ?>
		<?php print_head_scripts(); ?>
	</head>

	<body <?php body_class(); ?>>
		<?php wp_print_footer_scripts(); ?>
		<?php wp_footer(); ?>
	</body>
</html>
