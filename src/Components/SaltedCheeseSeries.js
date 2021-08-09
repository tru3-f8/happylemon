import React from 'react';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';

function SaltedCheeseSeries() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <SaltedCheeseSeriesContainer id='saltedCheese'>
      <SaltedCheeseSeriesSubContainer>
        <SaltedCheeseSeriesTitle onClick={scrollToTop}>Salted Cheese Series</SaltedCheeseSeriesTitle>
        <SaltedCheeseSeriesListContainer>
          <SaltedCheeseSeriesList>
            <SaltedCheeseSeriesItems>
              <SaltedCheeseSeriesImage src='images/jasmine_green_tea_with_salted_cheese.jpeg' />
              <SaltedCheeseSeriesItem>
                B1 Jasmine Green Tea With Salted Cheese
              </SaltedCheeseSeriesItem>
            </SaltedCheeseSeriesItems>
            <SaltedCheeseSeriesItems>
              <SaltedCheeseSeriesImage src='images/black_tea_with_salted_cheese.jpeg' />
              <SaltedCheeseSeriesItem>
                B2 Black Tea With Salted Cheese
              </SaltedCheeseSeriesItem>
            </SaltedCheeseSeriesItems>
            <SaltedCheeseSeriesItems>
              <SaltedCheeseSeriesImage src='images/milk_tea_with_salted_cheese.jpeg' />
              <SaltedCheeseSeriesItem>
                B3 Milk Tea With Salted Cheese
              </SaltedCheeseSeriesItem>
            </SaltedCheeseSeriesItems>
          </SaltedCheeseSeriesList>

          <SaltedCheeseSeriesList>
            <SaltedCheeseSeriesItems>
              <SaltedCheeseSeriesImage src='images/strawberry_green_tea_with_salted_cheese.jpeg' />
              <SaltedCheeseSeriesItem>
                B4 Strawberry Green Tea With Salted Cheese
              </SaltedCheeseSeriesItem>
            </SaltedCheeseSeriesItems>
            <SaltedCheeseSeriesItems>
              <SaltedCheeseSeriesImage src='images/matcha_latte_with_salted_cheese.jpeg' />
              <SaltedCheeseSeriesItem>
                B5 Matcha Latte With Salted Cheese
              </SaltedCheeseSeriesItem>
            </SaltedCheeseSeriesItems>
          </SaltedCheeseSeriesList>
        </SaltedCheeseSeriesListContainer>
      </SaltedCheeseSeriesSubContainer>
    </SaltedCheeseSeriesContainer>
  );
}

export default SaltedCheeseSeries;

const SaltedCheeseSeriesContainer = styled.div`
  margin-top: 100px;
`;

const SaltedCheeseSeriesTitle = styled.h1`
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

const SaltedCheeseSeriesSubContainer = styled.div`
  height: 840px;
  width: 1200px;
  border: 5px double rgb(144, 35, 2);
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #fff;
`;

const SaltedCheeseSeriesListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 50px 50px;
`;

const SaltedCheeseSeriesList = styled.div``;

const SaltedCheeseSeriesItems = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 60px;
`;

const SaltedCheeseSeriesImage = styled.img`
  object-fit: cover;
  width: 170px;
  height: 170px;
  border-bottom: 1px solid #e8e8e8;
`;

const SaltedCheeseSeriesItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  width: 300px;
  text-transform: uppercase;
  color: rgb(144, 35, 2);
  font-weight: normal;
  font-family: 'Righteous';
  font-size: 20px;
`;
