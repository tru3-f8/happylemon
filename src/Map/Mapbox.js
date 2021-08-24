import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
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

  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          message: 'Foo',
          iconSize: [60, 60],
        },
        geometry: {
          type: 'Point',
          coordinates: [-66.324462, -16.024695],
        },
      },
      {
        type: 'Feature',
        properties: {
          message: 'Bar',
          iconSize: [50, 50],
        },
        geometry: {
          type: 'Point',
          coordinates: [-61.21582, -15.971891],
        },
      },
      {
        type: 'Feature',
        properties: {
          message: 'Baz',
          iconSize: [40, 40],
        },
        geometry: {
          type: 'Point',
          coordinates: [-63.292236, -18.281518],
        },
      },
    ],
  };

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
      center: [-117.077, 32.689],
      zoom: 10,

    });

    const marker = new mapboxgl.Marker().setLngLat([-116.9621115658552, 32.621190888609654]).addTo(map);
   
  

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

const MapboxMarker = styled.div`
    background-image: url('mapbox-icon.png');
    background-size: cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
`;
