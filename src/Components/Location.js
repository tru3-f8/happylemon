import React from 'react';
import styled from 'styled-components';
import Mapbox from '../Map/Mapbox';

function Location() {
  return (
    <LocationContainer>
      <Mapbox />
    </LocationContainer>
  );
}

export default Location;

const LocationContainer = styled.div``;
