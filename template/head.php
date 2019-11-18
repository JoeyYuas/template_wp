<?php wp_deregister_script('jquery'); ?>
<meta charset="utf-8">
<title>template</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css">
<link href="https://fonts.googleapis.com/css?family=Noto+Serif+JP:400,700&display=swap" rel="stylesheet">
<script src="<?php echo get_template_directory_uri(); ?>/src/js/jquery-3.4.1.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/src/js/common.js"></script>
<?php wp_enqueue_script('jquery'); ?>
<?php wp_head(); ?>
