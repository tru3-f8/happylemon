import React from 'react';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';

function ClassicSeries() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <ClassicSeriesContainer id='classic'>
      <ClassicSeriesSubContainer>
        <ClassicSeriesTitle onClick={scrollToTop}>Classic Series</ClassicSeriesTitle>
        <ClassicSeriesListContainer>
          <ClassicSeriesList>
            <ClassicSeriesItems>
              <ClassicSeriesImage src='images/classic_milk_tea.jpeg' />
              <ClassicSeriesItem>A1 Classic Milk Tea</ClassicSeriesItem>
            </ClassicSeriesItems>
            <ClassicSeriesItems>
              <ClassicSeriesImage src='images/boba_milk_tea.jpeg' />
              <ClassicSeriesItem>A2 Boba Milk Tea</ClassicSeriesItem>
            </ClassicSeriesItems>
            <ClassicSeriesItems>
              <ClassicSeriesImage src='images/milk_tea_with_oreo_cookies_&_puff_cream.jpeg' />
              <ClassicSeriesItem>
                A3 Milk Tea With Oreo Cookies & Puff Cream
              </ClassicSeriesItem>
            </ClassicSeriesItems>
            <ClassicSeriesItems>
              <ClassicSeriesImage src='images/milk_tea_with_boba_&_puff_cream.jpeg' />
              <ClassicSeriesItem>
                A4 Milk Tea with Boba & Puff Cream
              </ClassicSeriesItem>
            </ClassicSeriesItems>
            <ClassicSeriesItems>
              <ClassicSeriesImage src='images/milk_tea_with_taro_balls.jpeg' />
              <ClassicSeriesItem>A5 Milk Tea With Taro Balls</ClassicSeriesItem>
            </ClassicSeriesItems>
          </ClassicSeriesList>

          <ClassicSeriesList>
            <ClassicSeriesItems>
              <ClassicSeriesImage src='images/jasmine_green_milk_tea.jpeg' />
              <ClassicSeriesItem>A6 Jasmine Green Milk Tea</ClassicSeriesItem>
            </ClassicSeriesItems>
            <ClassicSeriesItems>
              <ClassicSeriesImage src='images/wintermelon_with_fresh_milk.jpeg' />
              <ClassicSeriesItem>
                A7 Wintermelon With Fresh Milk
              </ClassicSeriesItem>
            </ClassicSeriesItems>
            <ClassicSeriesItems>
              <ClassicSeriesImage src='images/taro_milk_tea.jpeg' />
              <ClassicSeriesItem>A8 Taro Milk Tea</ClassicSeriesItem>
            </ClassicSeriesItems>
            <ClassicSeriesItems>
              <ClassicSeriesImage src='images/green_tea_black_tea.jpeg' />
              <ClassicSeriesItem>A9 Green Tea/Black Tea</ClassicSeriesItem>
            </ClassicSeriesItems>
          </ClassicSeriesList>
        </ClassicSeriesListContainer>
      </ClassicSeriesSubContainer>
    </ClassicSeriesContainer>
  );
}

export default ClassicSeries;

const ClassicSeriesContainer = styled.div``;

const ClassicSeriesTitle = styled.h1`
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

const ClassicSeriesSubContainer = styled.div`
  height: 1220px;
  width: 1200px;
  border: 5px double rgb(144, 35, 2);
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #fff;
`;

const ClassicSeriesListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 50px 50px;
`;

const ClassicSeriesList = styled.div``;

const ClassicSeriesItems = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 60px;
`;

const ClassicSeriesImage = styled.img`
  object-fit: cover;
  width: 170px;
  height: 170px;
  border-bottom: 1px solid #e8e8e8;
`;

const ClassicSeriesItem = styled.div`
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
