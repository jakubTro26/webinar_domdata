<?php
/**
 * Branding template.
 *
 * @package The7/Templates
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<div class="branding">
	<div id="site-title" class="assistive-text"><?php bloginfo( 'name' ); ?></div>
	<div id="site-description" class="assistive-text"><?php bloginfo( 'description' ); ?></div>
	<?php
	$logo = '';

//	$logo .= presscore_get_the_main_logo();

	$logo = '<img class=" preload-me" 
	src="http://pureconferences.pl/webinar-domdata/wp-content/uploads/2021/10/domdata_only_logo-003-1.png" 
	srcset="http://pureconferences.pl/webinar-domdata/wp-content/uploads/2021/10/domdata_only_logo-003-1.png 250w, 
	http://pureconferences.pl/webinar-domdata/wp-content/uploads/2021/10/domdata_only_logo-003-1.png 250w" width="250"
	 height="30" sizes="250px" alt="Domdata Webinar">';

	// Do not display mobile logo on mixed headers.
	if ( ! presscore_header_layout_is_mixed() ) {
		$logo .= presscore_get_the_mobile_logo();
	}

	$config                     = presscore_config();
	$main_logo_class            = '';
	$show_main_transparent_logo = 'main' === $config->get( 'logo.header.transparent.style' );
	$show_main_floating_logo    = 'main' === $config->get( 'header.floating_navigation.logo.style' );
	if ( $show_main_floating_logo && ( ! presscore_header_is_transparent() || $show_main_transparent_logo ) ) {
		$main_logo_class = 'same-logo';
	}
	presscore_display_the_logo( $logo, $main_logo_class );

	presscore_render_header_elements( 'near_logo_left' );
	presscore_render_header_elements( 'near_logo_right' );
	?>
</div>
