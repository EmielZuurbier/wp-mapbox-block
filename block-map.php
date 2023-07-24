<?php

/**
 * Plugin Name:         Map block
 * Plugin URI:          https://bydauto.nl/
 * Description:         Block Editor block with a Mapbox map
 * Version:             1.0.0
 * Requires at least:   6.0
 * Author:              The Developer's Agency
 * Text Domain:         tda-block-map
 * Domain Path:         /languages
 */

/**
 * Register custom blocks for the Block Editor.
 */
add_action('init', function () {
  register_block_type(__DIR__ . '/build/block.json');
});
