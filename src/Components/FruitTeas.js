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
              <FruitTeasImage src='images/classic_milk_tea.jpeg' />
              <FruitTeasItem>A1 Classic Milk Tea</FruitTeasItem>
            </FruitTeasItems>
            <FruitTeasItems>
              <FruitTeasImage src='images/classic_milk_tea.jpeg' />
              <FruitTeasItem>A1 Classic Milk Tea</FruitTeasItem>
            </FruitTeasItems>
            <FruitTeasItems>
              <FruitTeasImage src='images/classic_milk_tea.jpeg' />
              <FruitTeasItem>A1 Classic Milk Tea</FruitTeasItem>
            </FruitTeasItems>
          </FruitTeasList>

          <FruitTeasList>
            <FruitTeasItems>
              <FruitTeasImage src='images/classic_milk_tea.jpeg' />
              <FruitTeasItem>A1 Classic Milk Tea</FruitTeasItem>
            </FruitTeasItems>
            <FruitTeasItems>
              <FruitTeasImage src='images/classic_milk_tea.jpeg' />
              <FruitTeasItem>A1 Classic Milk Tea</FruitTeasItem>
            </FruitTeasItems>
            <FruitTeasItems>
              <FruitTeasImage src='images/classic_milk_tea.jpeg' />
              <FruitTeasItem>A1 Classic Milk Tea</FruitTeasItem>
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
`;

const FruitTeasSubContainer = styled.div`
  height: 830px;
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
