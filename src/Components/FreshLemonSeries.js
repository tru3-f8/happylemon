import React from 'react';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';

function FreshLemonSeries() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <FreshLemonSeriesContainer id='freshLemon'>
      <FreshLemonSeriesSubContainer>
        <FreshLemonSeriesTitle onClick={scrollToTop}>Fresh Lemon Series</FreshLemonSeriesTitle>
        <FreshLemonSeriesListContainer>
          <FreshLemonSeriesList>
            <FreshLemonSeriesItems>
              <FreshLemonSeriesImage src='images/yakult_lemon_jasmine_green_tea.jpeg' />
              <FreshLemonSeriesItem>
                C1 Yakult Lemon Jasmine Green Tea
              </FreshLemonSeriesItem>
            </FreshLemonSeriesItems>
            <FreshLemonSeriesItems>
              <FreshLemonSeriesImage src='images/fresh_lemon_honey_jasmine_green_tea.jpeg' />
              <FreshLemonSeriesItem>
                C2 Fresh Lemon Honey Jasmine Green Tea
              </FreshLemonSeriesItem>
            </FreshLemonSeriesItems>
          </FreshLemonSeriesList>

          <FreshLemonSeriesList>
            <FreshLemonSeriesItems>
              <FreshLemonSeriesImage src='images/kumquat_lemon_jasmine_green_tea.jpeg' />
              <FreshLemonSeriesItem>
                C3 Kumquat Lemon Jasmine Green Tea
              </FreshLemonSeriesItem>
            </FreshLemonSeriesItems>
          </FreshLemonSeriesList>
        </FreshLemonSeriesListContainer>
      </FreshLemonSeriesSubContainer>
    </FreshLemonSeriesContainer>
  );
}

export default FreshLemonSeries;

const FreshLemonSeriesContainer = styled.div`
  margin-top: 100px;
`;

const FreshLemonSeriesTitle = styled.h1`
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

const FreshLemonSeriesSubContainer = styled.div`
  height: 650px;
  width: 1200px;
  max-width: 90%;
  border: 5px double rgb(144, 35, 2);
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #fff;

  @media screen and (max-width: 900px) {
    height: 850px;
  }

  @media screen and (max-width: 600px) {
    height: 1095px;
  }

`;

const FreshLemonSeriesListContainer = styled.div`
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

const FreshLemonSeriesList = styled.div``;

const FreshLemonSeriesItems = styled.div`
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

const FreshLemonSeriesImage = styled.img`
  object-fit: cover;
  width: 170px;
  height: 170px;
  border-bottom: 1px solid #e8e8e8;


  @media screen and (max-width: 900px) {
    border-bottom: none;
  }

`;

const FreshLemonSeriesItem = styled.div`
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
