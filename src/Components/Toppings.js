import React from 'react';
import styled from 'styled-components';

function Toppings() {
  return (
    <ToppingsContainer>
      <ToppingsSubContainer>
        <ToppingsTitle>Toppings</ToppingsTitle>
        <ToppingsListContainer>
          <ToppingsList>
            <ToppingsItems>
              <ToppingsImage src='images/classic_milk_tea.jpeg' />
              <ToppingsItem>A1 Classic Milk Tea</ToppingsItem>
            </ToppingsItems>
            <ToppingsItems>
              <ToppingsImage src='images/classic_milk_tea.jpeg' />
              <ToppingsItem>A1 Classic Milk Tea</ToppingsItem>
            </ToppingsItems>
            <ToppingsItems>
              <ToppingsImage src='images/classic_milk_tea.jpeg' />
              <ToppingsItem>A1 Classic Milk Tea</ToppingsItem>
            </ToppingsItems>
            <ToppingsItems>
              <ToppingsImage src='images/classic_milk_tea.jpeg' />
              <ToppingsItem>A1 Classic Milk Tea</ToppingsItem>
            </ToppingsItems>
            <ToppingsItems>
              <ToppingsImage src='images/classic_milk_tea.jpeg' />
              <ToppingsItem>A1 Classic Milk Tea</ToppingsItem>
            </ToppingsItems>
            <ToppingsItems>
              <ToppingsImage src='images/classic_milk_tea.jpeg' />
              <ToppingsItem>A1 Classic Milk Tea</ToppingsItem>
            </ToppingsItems>
          </ToppingsList>

          <ToppingsList>
            <ToppingsItems>
              <ToppingsImage src='images/classic_milk_tea.jpeg' />
              <ToppingsItem>A1 Classic Milk Tea</ToppingsItem>
            </ToppingsItems>
            <ToppingsItems>
              <ToppingsImage src='images/classic_milk_tea.jpeg' />
              <ToppingsItem>A1 Classic Milk Tea</ToppingsItem>
            </ToppingsItems>
            <ToppingsItems>
              <ToppingsImage src='images/classic_milk_tea.jpeg' />
              <ToppingsItem>A1 Classic Milk Tea</ToppingsItem>
            </ToppingsItems>
            <ToppingsItems>
              <ToppingsImage src='images/classic_milk_tea.jpeg' />
              <ToppingsItem>A1 Classic Milk Tea</ToppingsItem>
            </ToppingsItems>
            <ToppingsItems>
              <ToppingsImage src='images/classic_milk_tea.jpeg' />
              <ToppingsItem>A1 Classic Milk Tea</ToppingsItem>
            </ToppingsItems>
            <ToppingsItems>
              <ToppingsImage src='images/classic_milk_tea.jpeg' />
              <ToppingsItem>A1 Classic Milk Tea</ToppingsItem>
            </ToppingsItems>
          </ToppingsList>
        </ToppingsListContainer>
      </ToppingsSubContainer>
    </ToppingsContainer>
  );
}

export default Toppings;

const ToppingsContainer = styled.div`
  margin-top: 100px;
`;

const ToppingsTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  color: rgb(144, 35, 2);
`;

const ToppingsSubContainer = styled.div`
  height: 1400px;
  width: 1200px;
  border: 5px double rgb(144, 35, 2);
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #fff;
`;

const ToppingsListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 50px 50px;
`;

const ToppingsList = styled.div``;

const ToppingsItems = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 60px;
`;

const ToppingsImage = styled.img`
  object-fit: cover;
  width: 170px;
  height: 170px;
  border-bottom: 1px solid #e8e8e8;
`;

const ToppingsItem = styled.div`
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
