import mapboxgl from 'mapbox-gl';
import Map from 'react-map-gl';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useEffect, useRef, useState } from '@wordpress/element';
import {
  TextControl,
  Panel,
  PanelBody,
  Placeholder
} from '@wordpress/components';
import { info } from '@wordpress/icons';

const Edit = ({ attributes, setAttributes }) => {
  const { accessToken } = attributes;
  const blockProps = useBlockProps();

  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);

  const onChangeAccessToken = (value) => {
    setAttributes({ accessToken: value });
  };

  return (
    <>
      <InspectorControls>
        <Panel>
          <PanelBody title={__('Access Token')}>
            <TextControl
              label={__('Enter the Mapbox Access Token')}
              help={__(
                "If you don't have an access token, visit the Mapbox account page to create a token."
              )}
              value={accessToken}
              onChange={onChangeAccessToken}
            />
          </PanelBody>
        </Panel>
      </InspectorControls>

      <div {...blockProps}>
        {accessToken === '' ? (
          <Placeholder
            icon={info}
            label={__('Access Token')}
            instructions={__('Please enter a Mapbox access token')}
            isColumnLayout
          />
        ) : (
          <Map
            mapLib={mapboxgl}
            mapboxAccessToken={accessToken}
            initialViewState={{
              longitude: lng,
              latitude: lat,
              zoom: 3.5
            }}
            style={{ width: 600, height: 400 }}
            mapStyle="mapbox://styles/mapbox/streets-v12"
          />
        )}
      </div>
    </>
  );
};

export default Edit;
