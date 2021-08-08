import React from 'react';
import styled from 'styled-components';

function FreshLemonSeries() {
  return (
    <FreshLemonSeriesContainer>
      <FreshLemonSeriesSubContainer>
        <FreshLemonSeriesTitle>Fresh Lemon Series</FreshLemonSeriesTitle>
        <FreshLemonSeriesListContainer>

        <FreshLemonSeriesList>
            <FreshLemonSeriesItems>
              <FreshLemonSeriesImage src='images/yakult_lemon_jasmine_green_tea.jpeg' />
              <FreshLemonSeriesItem>C1 Yakult Lemon Jasmine Green Tea</FreshLemonSeriesItem>
            </FreshLemonSeriesItems>
            <FreshLemonSeriesItems>
              <FreshLemonSeriesImage src='images/fresh_lemon_honey_jasmine_green_tea.jpeg' />
              <FreshLemonSeriesItem>C2 Fresh Lemon Honey Jasmine Green Tea</FreshLemonSeriesItem>
            </FreshLemonSeriesItems>
          </FreshLemonSeriesList>

          <FreshLemonSeriesList>
            <FreshLemonSeriesItems>
              <FreshLemonSeriesImage src='images/kumquat_lemon_jasmine_green_tea.jpeg' />
              <FreshLemonSeriesItem>C3 Kumquat Lemon Jasmine Green Tea</FreshLemonSeriesItem>
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
`;

const FreshLemonSeriesSubContainer = styled.div`
  height: 640px;
  width: 1200px;
  border: 5px double rgb(144, 35, 2);
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #fff;
`;

const FreshLemonSeriesListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 50px 50px;
`;

const FreshLemonSeriesList = styled.div`
`;

const FreshLemonSeriesItems = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 60px;
`;

const FreshLemonSeriesImage = styled.img`
  object-fit: cover;
  width: 170px;
  height: 170px;
  border-bottom: 1px solid #e8e8e8;
`;

const FreshLemonSeriesItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  width: 300px;
  text-transform: uppercase;
  color: rgb(144, 35, 2);
  font-weight: normal;
  font-family: 'Righteous';
  font-size: 20px;
`;
