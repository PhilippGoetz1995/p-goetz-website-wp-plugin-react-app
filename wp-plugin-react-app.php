<?php 
/**
* Plugin.
*
* @package Wp-Plugin-React-App
* @wordpress-plugin
*
* Plugin Name:     Wp-Plugin-React-App
* Description:     Wp-Plugin-React-App
* Author:          Philipp Goetz
* Author URL:      https://weshuber.com
* Version:         0.11
*/


function react_app_shortcode_with_script() {


    // Path to your React build directory => to get the main.[HASH].js filename
    $react_build_dir = plugin_dir_url(__FILE__) . 'build/';
    $manifest_file = $react_build_dir . 'asset-manifest.json';

    // Enqueue the React app script
    // wp_enqueue_script(
    //     'react-app',
    //    plugin_dir_url(__FILE__) . 'build/static/js/main.b682f75f.js', // Update with the correct path
    //     array(), 
    //     '1.0', 
    //     true
    // );

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


    // // Optionally enqueue CSS if your React app uses it
    // wp_enqueue_style(
    //     'react-app-style',
    //     get_template_directory_uri() . '/path-to-build/static/css/main.css', // Update with the correct path
    //     array(),
    //     '1.0'
    // );

    // Output the React root element
    return '<div id="react-root"></div>';
}
add_shortcode('react_app', 'react_app_shortcode_with_script');

?>