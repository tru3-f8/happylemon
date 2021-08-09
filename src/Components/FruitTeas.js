import React from 'react';
import styled from 'styled-components';

function FruitTeas() {
  return (
    <FruitTeasContainer>
      <FruitTeasSubContainer>
        <FruitTeasTitle>Fruit Teas</FruitTeasTitle>
        <FruitTeasListContainer>

          <FruitTeasList>
            <FruitTeasItems>
              <FruitTeasImage src='images/mango_jasmine_green_tea.jpeg' />
              <FruitTeasItem>F1 Mango Jasmine Green Tea</FruitTeasItem>
            </FruitTeasItems>
            <FruitTeasItems>
              <FruitTeasImage src='images/fresh_grapefruit_green_tea.jpeg' />
              <FruitTeasItem>F2 Fresh Grapefruit Green Tea</FruitTeasItem>
            </FruitTeasItems>
          </FruitTeasList>

          <FruitTeasList>
            <FruitTeasItems>
              <FruitTeasImage src='images/strawberry_black_tea_with_lychee_jelly.jpeg' />
              <FruitTeasItem>F3 Strawberry Black Tea With Lychee Jelly</FruitTeasItem>
            </FruitTeasItems>
            <FruitTeasItems>
              <FruitTeasImage src='images/strawberry_jasmine_green_tea_with_lychee_jelly.jpeg' />
              <FruitTeasItem>F4 Strawberry Jasmine Green Tea With Lychee Jelly</FruitTeasItem>
            </FruitTeasItems>
          </FruitTeasList>

        </FruitTeasListContainer>
      </FruitTeasSubContainer>
    </FruitTeasContainer>
  );
}

export default FruitTeas;

const FruitTeasContainer = styled.div`
  margin-top: 100px;
`;

const FruitTeasTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  color: rgb(144, 35, 2);
  font-family: Righteous;
`;

const FruitTeasSubContainer = styled.div`
  height: 650px;
  width: 1200px;
  border: 5px double rgb(144, 35, 2);
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #fff;
`;

const FruitTeasListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 50px 50px;
`;

const FruitTeasList = styled.div``;

const FruitTeasItems = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 60px;
`;

const FruitTeasImage = styled.img`
  object-fit: cover;
  width: 170px;
  height: 170px;
  border-bottom: 1px solid #e8e8e8;
`;

const FruitTeasItem = styled.div`
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
