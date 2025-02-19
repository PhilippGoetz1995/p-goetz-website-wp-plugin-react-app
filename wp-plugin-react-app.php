<?php 
/**
* Plugin.
*
* @package Wp-Plugin-React-App
* @wordpress-plugin
*
* Plugin Name:     WP-Plugin-React-App
* Description:     React App Integration via Shortcode (Lazy Load)
* Author:          Philipp Goetz
* Author URL:      https://p-goetz.de
* Version:         0.14
*/

function react_app_shortcode_with_script() {
    // Path to your React build directory => to get the main.[HASH].js filename
    $react_build_dir = plugin_dir_url(__FILE__) . 'build/';
    $manifest_file = $react_build_dir . 'asset-manifest.json';

    // Decode the manifest JSON
    $manifest = json_decode(file_get_contents($manifest_file), true);

    $script_files = [];
    $css_files = [];

    // Get JS and CSS files from the manifest
    if (isset($manifest['entrypoints'])) {
        foreach ($manifest['entrypoints'] as $file) {
            if (str_ends_with($file, '.js')) {
                $script_files[] = plugin_dir_url(__FILE__) . 'build/' . $file;
            }
            if (str_ends_with($file, '.css')) {
                $css_files[] = plugin_dir_url(__FILE__) . 'build/' . $file;
            }
        }
    }

    // Convert PHP arrays to JSON
    $script_files_json = json_encode($script_files);
    $css_files_json = json_encode($css_files);

    ob_start();
    ?>
    <div id="react-root"></div>
    <script>
        function loadReactApp() {
            if (window.reactAppLoaded) return; // Prevent multiple loads
            window.reactAppLoaded = true;

            // Load CSS files
            let cssFiles = <?php echo $css_files_json; ?>;
            cssFiles.forEach(file => {
                let link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = file;
                document.head.appendChild(link);
            });

            // Load JS files dynamically
            let scriptFiles = <?php echo $script_files_json; ?>;
            scriptFiles.forEach((file, index) => {
                let script = document.createElement("script");
                script.src = file;
                script.async = true;
                script.onload = function() {
                    //console.log("React App script loaded: " + file);
                };
                document.body.appendChild(script);
            });
        }
    </script>
    <?php
    return ob_get_clean();
}

add_shortcode('react_app', 'react_app_shortcode_with_script');
?>
