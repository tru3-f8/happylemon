import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <ImageSliderContainer>
      <ImageSliderCarouselContainer>
        <ImageSliderCarousel {...settings}>
          <ImageItem>
            <Image src='/images/boba_milk_tea.jpeg' alt='Boba Milk Tea' />
          </ImageItem>
          <ImageItem>
            <Image src='/images/green_black_tea.jpeg' alt='Green Black Tea' />
          </ImageItem>
          <ImageItem>
            <Image
              src='/images/jasmine_green_milk_tea.jpeg'
              alt='Jasmine Green Milk Tea'
            />
          </ImageItem>
          <ImageItem>
            <Image
              src='/images/strawberry_shortcake_smoothie.jpeg'
              alt='Strawberry Shortcake Smoothie'
            />
          </ImageItem>
          <ImageItem>
            <Image src='/images/avocado_smoothie.jpeg' alt='Avocado Smoothie' />
          </ImageItem>
          <ImageItem>
            <Image
              src='/images/black_tea_salted_cheese.jpeg'
              alt='Black Tea With Salted Cheese'
            />
          </ImageItem>
        </ImageSliderCarousel>
      </ImageSliderCarouselContainer>
    </ImageSliderContainer>
  );
}

export default ImageSlider;

const ImageSliderContainer = styled.div`
  height: 700px;
  width: 1200px;
  margin: 0 auto;
  border-radius: 10px;
  background: #fff;
  transition: all 250ms cubic-bezier(0, 0, 0, 0) 0s;

  &:hover {
    transform: scale(1.21);
  }
`;

const ImageSliderCarouselContainer = styled.div`
  height: 600px;
  width: 1100px;
  margin: 35px auto;
`;

const ImageSliderCarousel = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    visibility: hidden;
  }
`;

const ImageItem = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
`;
