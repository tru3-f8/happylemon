import React from 'react';
import styled from 'styled-components';

function ClassicSeries() {
  return (
    <ClassicSeriesContainer>
      <ClassicSeriesSubContainer>
        <ClassicSeriesTitle>Classic Series</ClassicSeriesTitle>
        <ClassicSeriesListContainer>

          <ClassicSeriesList>
            <ClassicSeriesItems>
              <ClassicSeriesImage src='images/classic_milk_tea.jpeg' />
              <ClassicSeriesItem>A1 Classic Milk Tea</ClassicSeriesItem>
            </ClassicSeriesItems>
            <ClassicSeriesItems>
              <ClassicSeriesImage src='images/classic_milk_tea.jpeg' />
              <ClassicSeriesItem>A1 Classic Milk Tea</ClassicSeriesItem>
            </ClassicSeriesItems>
            <ClassicSeriesItems>
              <ClassicSeriesImage src='images/classic_milk_tea.jpeg' />
              <ClassicSeriesItem>A1 Classic Milk Tea</ClassicSeriesItem>
            </ClassicSeriesItems>
            <ClassicSeriesItems>
              <ClassicSeriesImage src='images/classic_milk_tea.jpeg' />
              <ClassicSeriesItem>A1 Classic Milk Tea</ClassicSeriesItem>
            </ClassicSeriesItems>
            <ClassicSeriesItems>
              <ClassicSeriesImage src='images/classic_milk_tea.jpeg' />
              <ClassicSeriesItem>A1 Classic Milk Tea</ClassicSeriesItem>
            </ClassicSeriesItems>
            <ClassicSeriesItems>
              <ClassicSeriesImage src='images/classic_milk_tea.jpeg' />
              <ClassicSeriesItem>A1 Classic Milk Tea</ClassicSeriesItem>
            </ClassicSeriesItems>
          </ClassicSeriesList>

          <ClassicSeriesList>
            <ClassicSeriesItems>
              <ClassicSeriesImage src='images/classic_milk_tea.jpeg' />
              <ClassicSeriesItem>A1 Classic Milk Tea</ClassicSeriesItem>
            </ClassicSeriesItems>
            <ClassicSeriesItems>
              <ClassicSeriesImage src='images/classic_milk_tea.jpeg' />
              <ClassicSeriesItem>A1 Classic Milk Tea</ClassicSeriesItem>
            </ClassicSeriesItems>
            <ClassicSeriesItems>
              <ClassicSeriesImage src='images/classic_milk_tea.jpeg' />
              <ClassicSeriesItem>A1 Classic Milk Tea</ClassicSeriesItem>
            </ClassicSeriesItems>
            <ClassicSeriesItems>
              <ClassicSeriesImage src='images/classic_milk_tea.jpeg' />
              <ClassicSeriesItem>A1 Classic Milk Tea</ClassicSeriesItem>
            </ClassicSeriesItems>
            <ClassicSeriesItems>
              <ClassicSeriesImage src='images/classic_milk_tea.jpeg' />
              <ClassicSeriesItem>A1 Classic Milk Tea</ClassicSeriesItem>
            </ClassicSeriesItems>
            <ClassicSeriesItems>
              <ClassicSeriesImage src='images/classic_milk_tea.jpeg' />
              <ClassicSeriesItem>A1 Classic Milk Tea</ClassicSeriesItem>
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
`;

const ClassicSeriesSubContainer = styled.div`
  height: 1400px;
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
