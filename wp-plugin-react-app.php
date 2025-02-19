<?php 
/**
* Plugin.
*
* @package Wp-Plugin-React-App
* @wordpress-plugin
*
* Plugin Name:     WP-Plugin-React-App
* Description:     React App Integration via Shortcode
* Author:          Philipp Goetz
* Author URL:      https://p-goetz.de
* Version:         0.13
*/


function react_app_shortcode_with_script() {

    // Path to your React build directory => to get the main.[HASH].js filename
    $react_build_dir = plugin_dir_url(__FILE__) . 'build/';
    $manifest_file = $react_build_dir . 'asset-manifest.json';

        // Decode the manifest JSON
        $manifest = json_decode(file_get_contents($manifest_file), true);

        // Enqueue the main JS file
        if (isset($manifest['entrypoints'])) {
            foreach ($manifest['entrypoints'] as $file) {
                if (str_ends_with($file, '.js')) {
                    wp_enqueue_script(
                        'react-app', 
                       plugin_dir_url(__FILE__) . 'build/' . $file, 
                        array(), 
                        null, 
                        true
                    );
                }

                if (str_ends_with($file, '.css')) {
                    wp_enqueue_style(
                        'react-app-style', 
                        plugin_dir_url(__FILE__) . 'build/' . $file, 
                        array(), 
                        null
                    );
                }
            }
        }


    // Output the React root element
    return '<div id="react-root"></div>';
}
add_shortcode('react_app', 'react_app_shortcode_with_script');

// Add defer attribute to the React script
function add_defer_to_react_script($tag, $handle) {
    if ('react-app' === $handle) {
        return str_replace(' src', ' defer src', $tag);
    }
    return $tag;
}
add_filter('script_loader_tag', 'add_defer_to_react_script', 10, 2);




?>