import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import mapboxgl from 'mapbox-gl';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function Mapbox() {
  mapboxgl.accessToken =
    'pk.eyJ1IjoidHJ1My1mOCIsImEiOiJja3M5eDR5M3AwNWlpMnVwY293YzB5dzRrIn0.pMJ6H_amn6e-qWmxV_pp_Q';

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/tru3-f8/cks9xy0xja4ln17p64tddukp9',
      center: [-117.077, 32.689],
      zoom: 10,
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

const MapboxContainer = styled.div`
`;

const MapboxSubContainer = styled.div`
  height: 400px;
  width: 700px;
`

const MapboxMap = styled.div`
  height: 400px;
  width: 700px;
  object-fit: cover;
`;
