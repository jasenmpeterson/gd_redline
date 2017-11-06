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
    <?php get_template_part( 'template-parts/header' ); ?>
    <div class="scroll__wrap">
        <?php get_template_part( 'template-parts/introduction' ); ?>
    </div>
</main>

<?php

get_footer();