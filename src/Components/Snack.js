import React from 'react';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';

function Snack() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <SnackContainer id='snack'>
      <SnackSubContainer>
        <SnackTitle onClick={scrollToTop}>Snack</SnackTitle>
        <SnackListContainer>
          <SnackList>
            <SnackItems>
              <SnackImage src='images/original_bubble_waffle.jpeg' />
              <SnackItem>I1 Original Bubble Waffle</SnackItem>
            </SnackItems>
            <SnackItems>
              <SnackImage src='images/oreo_bubble_waffle.jpeg' />
              <SnackItem>I2 Oreo Bubble Waffle</SnackItem>
            </SnackItems>
          </SnackList>

          <SnackList>
            <SnackItems>
              <SnackImage src='images/chocolate_bubble_waffle.jpeg' />
              <SnackItem>I3 Chocolate Bubble Waffle</SnackItem>
            </SnackItems>
            <SnackItems>
              <SnackImage src='images/cheese_bubble_waffle.jpeg' />
              <SnackItem>I4 Cheese Bubble Waffle</SnackItem>
            </SnackItems>
          </SnackList>
        </SnackListContainer>
      </SnackSubContainer>
    </SnackContainer>
  );
}

export default Snack;

const SnackContainer = styled.div`
  margin-top: 100px;
`;

const SnackTitle = styled.h1`
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

const SnackSubContainer = styled.div`
  height: 610px;
  width: 1200px;
  border: 5px double rgb(144, 35, 2);
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #fff;
`;

const SnackListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 50px 50px;
`;

const SnackList = styled.div``;

const SnackItems = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 60px;
`;

const SnackImage = styled.img`
  object-fit: cover;
  width: 170px;
  height: 130px;
  border-bottom: 1px solid #e8e8e8;
  border-radius: 5%;
  margin-bottom: 20px;
`;

const SnackItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 25px;
  border-bottom: 1px solid #e8e8e8;
  width: 300px;
  text-transform: uppercase;
  color: rgb(144, 35, 2);
  font-weight: normal;
  font-family: 'Righteous';
  font-size: 20px;
  margin-left: 15px;
`;
