import React from 'react';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';

function Smoothies() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <SmoothiesContainer>
      <SmoothiesSubContainer>
        <SmoothiesTitle onClick={scrollToTop}>Smoothies</SmoothiesTitle>
        <SmoothiesListContainer>
          <SmoothiesList>
            <SmoothiesItems>
              <SmoothiesImage src='images/mango_matcha.jpeg' />
              <SmoothiesItem>E1 Mango Matcha</SmoothiesItem>
            </SmoothiesItems>
            <SmoothiesItems>
              <SmoothiesImage src='images/avocado_matcha.jpeg' />
              <SmoothiesItem>E2 Avocado Matcha</SmoothiesItem>
            </SmoothiesItems>
            <SmoothiesItems>
              <SmoothiesImage src='images/strawberry_shortcake_smoothie.jpeg' />
              <SmoothiesItem>E3 Strawberry Shortcake Smoothie</SmoothiesItem>
            </SmoothiesItems>
          </SmoothiesList>

          <SmoothiesList>
            <SmoothiesItems>
              <SmoothiesImage src='images/mango_smoothie.jpeg' />
              <SmoothiesItem>E4 Mango Smoothie</SmoothiesItem>
            </SmoothiesItems>
            <SmoothiesItems>
              <SmoothiesImage src='images/avocado_smoothie.jpeg' />
              <SmoothiesItem>E5 Avocado Smoothie</SmoothiesItem>
            </SmoothiesItems>
          </SmoothiesList>
        </SmoothiesListContainer>
      </SmoothiesSubContainer>
    </SmoothiesContainer>
  );
}

export default Smoothies;

const SmoothiesContainer = styled.div`
  margin-top: 100px;
`;

const SmoothiesTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  color: rgb(144, 35, 2);
  font-family: Righteous;
  cursor: pointer;

  &:hover {
    color: rgb(254, 216, 0);
  }
`;

const SmoothiesSubContainer = styled.div`
  height: 840px;
  width: 1200px;
  max-width: 90%;
  border: 5px double rgb(144, 35, 2);
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #fff;


  @media screen and (max-width: 900px) {
    height: 1230px;
  }

  @media screen and (max-width: 600px) {
    height: 1560px;
  }

`;

const SmoothiesListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 50px 50px;


  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding-left: 250px;
  }

`;

const SmoothiesList = styled.div``;

const SmoothiesItems = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 60px;

  @media screen and (max-width: 1300px) {
    width: 300px;
  }

  @media screen and (max-width: 900px) {
    width: 400px;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 400px;
    max-width: 90%;
    justify-content: center;
  }

`;

const SmoothiesImage = styled.img`
  object-fit: cover;
  width: 170px;
  height: 170px;
  border-bottom: 1px solid #e8e8e8;

  @media screen and (max-width: 900px) {
    border-bottom: none;
  }

`;

const SmoothiesItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  width: 300px;
  text-transform: uppercase;
  color: rgb(144, 35, 2);
  font-weight: normal;
  font-family: 'Righteous';
  font-size: 20px;

  @media screen and (max-width: 900px) {
    padding-bottom: 15px;
  }

  @media screen and (max-width: 600px) {
    width: 200px;
  }

`;
