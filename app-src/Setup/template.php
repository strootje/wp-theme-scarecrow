<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<?php wp_head(); ?>
		<?php print_head_scripts(); ?>
		<?php $tmpldir = get_bloginfo("template_directory"); ?>
		<link rel="stylesheet" href="//unpkg.com/normalize.css/normalize.css" />
		<link rel="stylesheet" href="//unpkg.com/skeleton.css/skeleton.css" />
		<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Courgette|Righteous|Roboto" />
		<link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.8/css/all.css" />
		<link rel="stylesheet" href='<?php echo "{$tmpldir}/dist/assets/css/app.bundle.css"; ?>' />
	</head>

	<body <?php body_class(); ?>>
		<script src='<?php echo "{$tmpldir}/dist/assets/js/app.vendor.js"; ?>'></script>
		<script src='<?php echo "{$tmpldir}/dist/assets/js/app.bundle.js"; ?>'></script>
		<?php wp_print_footer_scripts(); ?>
		<?php wp_footer(); ?>
	</body>
</html>
