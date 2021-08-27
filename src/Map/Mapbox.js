import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import geojson from './MapData';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

function Mapbox() {
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
  const mapboxId = process.env.REACT_APP_MAPBOX_ID;

  const mapContainer = useRef(null);
  // const map = useRef(null);
  // const [lng, setLng] = useState(-70.9);
  // const [lat, setLat] = useState(42.35);
  // const [zoom, setZoom] = useState(9);

  useEffect(() => {
    // if (map.current) return;
    // map.current = new mapboxgl.Map({
    //   container: mapContainer.current,
    //   style: mapboxId,
    //   center: [-117.077, 32.689],
    //   zoom: 10,

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapboxId,
      center: [-117.033918, 32.781565],
      zoom: 9.1,
    });

    geojson.map((locationMarker) => {
      const marker = new mapboxgl.Marker()
        .setLngLat(locationMarker.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 30 })
        .setHTML(`<h4>${locationMarker.location}</h4> ${locationMarker.address} ${locationMarker.city}`))
        .addTo(map);
    });
  });

  return (
    <MapboxContainer>
      <MapboxSubContainer>
        <MapboxMap ref={mapContainer} />
      </MapboxSubContainer>
    </MapboxContainer>
  );
}

export default Mapbox;

const MapboxContainer = styled.div``;

const MapboxSubContainer = styled.div`
  height: 400px;
  width: 700px;
`;

const MapboxMap = styled.div`
  height: 400px;
  width: 700px;
  object-fit: cover;

  @media screen and (max-width: 900px) {
    height: 300px;
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`;
