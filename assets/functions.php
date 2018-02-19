<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasenpeterson
 * Date: 11/6/17
 * Time: 10:14 AM
 */

define("THEME_DIR", get_template_directory_uri());
define("THEME_URI", get_site_url() );

/*--- REMOVE GENERATOR META TAG ---*/
remove_action('wp_head', 'wp_generator');

// ENQUEUE STYLES

function enqueue_styles() {

	/** REGISTER css/screen.cs **/
	wp_register_style( 'theme-style', THEME_DIR . '/style.min.css', array(), '3', 'all' );
	wp_enqueue_style( 'theme-style' );


}
add_action( 'wp_enqueue_scripts', 'enqueue_styles' );

// ENQUEUE SCRIPTS

function enqueue_scripts() {

	wp_register_script( 'vendor-script', THEME_DIR . '/assets/js/vendors.min.js', array(), '2', true );
	wp_enqueue_script( 'vendor-script' );

	wp_register_script( 'theme-script', THEME_DIR . '/assets/js/custom.min.js', array(), '2', true );

	wp_register_script( 'font-awesome', 'https://use.fontawesome.com/d7c7bc48b2.js', array(), '1', true );
	wp_enqueue_script( 'font-awesome' );

	$ajaxurl = admin_url('admin-ajax.php');
	
		$pageParams = array(
		  'siteURL' => THEME_URI,
		  'root'    => get_home_url(),
		  'ajaxurl'  => $ajaxurl,
		  'themeDirectory' => get_stylesheet_directory_uri(),
		  'javascriptDirectory' => get_stylesheet_directory_uri() . '/assets/js/'
		);

	wp_localize_script('theme-script', 'pageParams', $pageParams);
	
	wp_enqueue_script( 'theme-script' );

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

if ( !(empty($_GET["allowtracking"])) ) {
	setcookie("gd-allowtracking", $_GET["allowtracking"] == "true" ? 1 : 0, strtotime( '+30 days' ) );
	setcookie("gd-showallowtracking", 1);
	if ( wp_redirect( $_SERVER["REDIRECT_URL"] ) ) { exit; }
}
setcookie("gd-showallowtracking", 0);

function show_ga_tracking_control() {
	?>

	<div class="tracking-control<?php if ( $_COOKIE["gd-showallowtracking"] !== "0" ) { echo ' -fixed'; } ?>">

		RedlinePacking.GardnerDenverPumps.com utilizes tracking and site analytics.

		<?php

		$allowTracking = $_COOKIE["gd-allowtracking"];

		if ( !isset($allowTracking) || $allowTracking == 1 ):

			?>

			You may <a href="?allowtracking=false">opt out</a> at any time.
			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-1226579-51"></script>
			<script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-1226579-51');
			</script>

		<?php else: ?>
			You are currently opted out, but you may <a href="?allowtracking=true">opt in</a> at any time.
		<?php endif; ?>

	</div>
	<?php

//	 echo "\n\n<!--\n";
//	 print_r($_GET);
//	 print_r($_COOKIE);
//	 echo "\n-->\n\n";

}
add_action( 'wp_footer', 'show_ga_tracking_control', 100 );