<?php
/*
Plugin Name:  Password Strength Meter
Plugin URI: http://www.dkarfawork.com/wordpress/plugins/password-strenth
Description: Password Strength Meter
Version: 1.0
Author: Debabrata Karfa
Author URI: http://www.dkarfawork.com
License: GPL2
*/
?>
<?php

add_action('template_redirect', 'dkw_register');
function dkw_register() {
  wp_register_script( 'dkw_user-profile', plugins_url('user-profile.js', __FILE__), array( 'jquery' ));
  
  wp_register_script( 'dkw_password-strength-meter', plugins_url( 'password-strength-meter.js', __FILE__ ), array( 'jquery', 'dkw_user-profile' ));
  
  wp_register_style( 'dkw_css', plugins_url( 'dkw-psm.css', __FILE__ ) );
  wp_enqueue_style( 'dkw_css' );    
}

add_action('dkw_register_form','dkw_add_strength_div');
function dkw_add_strength_div() {
  wp_enqueue_script('dkw_user-profile');
  wp_enqueue_script('dkw_password-strength-meter');
  
  echo '<div id="dkw-pass-strength-result">Password Strength Meter Output</div>';
}
?>
