import React from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';

function ImageSection() {
  return (
    <ImageSectionContainer>
      <ImageSlider />
    </ImageSectionContainer>
  );
}

export default ImageSection;

const ImageSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 900px;
`;
