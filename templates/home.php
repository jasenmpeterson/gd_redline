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
    <?php get_template_part( 'template-parts/header' ); ?>
    <div class="main__wrap">
        <div class="main">
            <?php get_template_part( 'template-parts/slides' ); ?>
        </div>
    </div>

    <?php

get_footer();