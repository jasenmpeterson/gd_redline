<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasenpeterson
 * Date: 11/6/17
 * Time: 10:14 AM
 */

define("THEME_DIR", get_template_directory_uri());
/*--- REMOVE GENERATOR META TAG ---*/
remove_action('wp_head', 'wp_generator');

// ENQUEUE STYLES

function enqueue_styles() {

	/** REGISTER css/screen.cs **/
	wp_register_style( 'theme-style', THEME_DIR . '/style.min.css', array(), '1', 'all' );
	wp_enqueue_style( 'theme-style' );

}
add_action( 'wp_enqueue_scripts', 'enqueue_styles' );

// ENQUEUE SCRIPTS

function enqueue_scripts() {

	wp_register_script( 'vendor-script', THEME_DIR . '/assets/js/vendors.js', array(), '1', true );
	wp_enqueue_script( 'vendor-script' );

	wp_register_script( 'theme-script', THEME_DIR . '/assets/js/custom.js', array(), '1', true );
	wp_enqueue_script( 'theme-script' );

	wp_register_script( 'font-awesome', 'https://use.fontawesome.com/d7c7bc48b2.js', array(), '1', true );
	wp_enqueue_script( 'font-awesome' );

}
add_action( 'wp_enqueue_scripts', 'enqueue_scripts' );

// REMOVE CONTENT EDITOR FROM PAGES

add_action('admin_init', 'remove_textarea');

function remove_textarea() {
	remove_post_type_support( 'page', 'editor' );
}

if( function_exists('acf_add_options_page') ) {

	acf_add_options_page(array(
		'page_title' 	=> 'Theme General Settings',
		'menu_title'	=> 'Theme Settings',
		'menu_slug' 	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));

}