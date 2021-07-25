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
  height: 800px;
  width: 1200px;
  margin: 85px auto;
  border: 3px solid #000;
  border-radius: 30px;
  background: #fff;
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.3);
  transition: all 250ms cubic-bezier(0, 0, 0, 0) 0s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.8) 0px 40px 58px -16px,
      rgba(0, 0, 0, 0.72) 0px 30px 22px -10px;

    transform: scale(1.05);
  }
`;

const ImageSliderCarouselContainer = styled.div`
  height: 700px;
  width: 1100px;
  margin: 80px auto;
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
