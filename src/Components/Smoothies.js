import React from 'react';
import styled from 'styled-components';

function Smoothies() {
  return (
    <SmoothiesContainer>
      <SmoothiesSubContainer>
        <SmoothiesTitle>Smoothies</SmoothiesTitle>
        <SmoothiesListContainer>
          <SmoothiesList>
            <SmoothiesItems>
              <SmoothiesImage src='images/classic_milk_tea.jpeg' />
              <SmoothiesItem>A1 Classic Milk Tea</SmoothiesItem>
            </SmoothiesItems>
            <SmoothiesItems>
              <SmoothiesImage src='images/classic_milk_tea.jpeg' />
              <SmoothiesItem>A1 Classic Milk Tea</SmoothiesItem>
            </SmoothiesItems>
            <SmoothiesItems>
              <SmoothiesImage src='images/classic_milk_tea.jpeg' />
              <SmoothiesItem>A1 Classic Milk Tea</SmoothiesItem>
            </SmoothiesItems>
          </SmoothiesList>

          <SmoothiesList>
            <SmoothiesItems>
              <SmoothiesImage src='images/classic_milk_tea.jpeg' />
              <SmoothiesItem>A1 Classic Milk Tea</SmoothiesItem>
            </SmoothiesItems>
            <SmoothiesItems>
              <SmoothiesImage src='images/classic_milk_tea.jpeg' />
              <SmoothiesItem>A1 Classic Milk Tea</SmoothiesItem>
            </SmoothiesItems>
            <SmoothiesItems>
              <SmoothiesImage src='images/classic_milk_tea.jpeg' />
              <SmoothiesItem>A1 Classic Milk Tea</SmoothiesItem>
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
`;

const SmoothiesSubContainer = styled.div`
  height: 830px;
  width: 1200px;
  border: 5px double rgb(144, 35, 2);
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #fff;
`;

const SmoothiesListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 50px 50px;
`;

const SmoothiesList = styled.div``;

const SmoothiesItems = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 60px;
`;

const SmoothiesImage = styled.img`
  object-fit: cover;
  width: 170px;
  height: 170px;
  border-bottom: 1px solid #e8e8e8;
`;

const SmoothiesItem = styled.div`
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
