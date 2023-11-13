// src/components/GoogleMaps.js

import React, { useEffect } from 'react';

const GoogleMaps = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDIixEC8HeZzh0VF0ANf9kDO-x0A&callback=initMap&libraries=places&v=weekly`;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="pac-card" id="pac-card">
        {/* ... Rest of your HTML content ... */}
      </div>
      <div id="map"></div>
      <div id="infowindow-content">
        <span id="place-name" className="title"></span>
        <br />
        <span id="place-address"></span>
      </div>
    </div>
  );
};

export default GoogleMaps;
