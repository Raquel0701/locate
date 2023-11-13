// src/components/MapComponent.js
import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const MapComponent = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 40.12150192260742,
    lng: -100.45039367675781,
  };

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={4}
      mapId="AIzaSyDIixEC8HeZzh0VF0ANfGHpg309kDO-x0A"
    >
      <Marker
        position={center}
        title="My location"
      />
    </GoogleMap>
  );
};

export default MapComponent;
