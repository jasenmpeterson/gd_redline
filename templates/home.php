<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasenpeterson
 * Date: 11/6/17
 * Time: 12:55 PM
 * Template Name: Home Page
 */

get_header();

?>

<main>
    <div class="curtain">
        <div class="square">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/gd-logo.svg" alt="">
        </div>
    </div>
    <?php get_template_part( 'template-parts/header' ); ?>
	<?php get_template_part( 'template-parts/slides' ); ?>
</main>

<?php

get_footer();