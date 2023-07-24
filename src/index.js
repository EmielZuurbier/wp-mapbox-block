import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { mapMarker } from '@wordpress/icons';
import metadata from './block.json';

import 'mapbox-gl/dist/mapbox-gl.css';
import './style.scss';

import Edit from './Edit';
import Save from './Save';

registerBlockType(metadata.name, {
  edit: Edit,
  save: Save,
  icon: mapMarker
});
