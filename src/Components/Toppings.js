import React from 'react';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';

function Toppings() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <ToppingsContainer id='toppings'>
      <ToppingsSubContainer>
        <ToppingsTitle onClick={scrollToTop}>Toppings</ToppingsTitle>
        <ToppingsListContainer>
          <ToppingsList>
            <ToppingsItems>
              <ToppingsImage src='images/boba.jpeg' />
              <ToppingsItem>Boba</ToppingsItem>
            </ToppingsItems>
            <ToppingsItems>
              <ToppingsImage src='images/pudding.jpeg' />
              <ToppingsItem>Pudding</ToppingsItem>
            </ToppingsItems>
            <ToppingsItems>
              <ToppingsImage src='images/lychee_jelly.jpeg' />
              <ToppingsItem>Lychee Jelly</ToppingsItem>
            </ToppingsItems>
            <ToppingsItems>
              <ToppingsImage src='images/aloe_vera.jpeg' />
              <ToppingsItem>Aloe Vera</ToppingsItem>
            </ToppingsItems>
          </ToppingsList>

          <ToppingsList>
            <ToppingsItems>
              <ToppingsImage src='images/puff_cream.jpeg' />
              <ToppingsItem>Puff Cream</ToppingsItem>
            </ToppingsItems>
            <ToppingsItems>
              <ToppingsImage src='images/mango_crystal_boba.jpeg' />
              <ToppingsItem>Mango Crystal Boba</ToppingsItem>
            </ToppingsItems>
            <ToppingsItems>
              <ToppingsImage src='images/salted_cheese.jpeg' />
              <ToppingsItem>Salted Cheese</ToppingsItem>
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
  margin-bottom: 130px;
`;

const ToppingsTitle = styled.h1`
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

const ToppingsSubContainer = styled.div`
  height: 1110px;
  width: 1200px;
  max-width: 90%;
  border: 5px double rgb(144, 35, 2);
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #fff;

  @media screen and (max-width: 900px) {
    height: 1770px;
  }

  @media screen and (max-width: 600px) {
    height: 1955px;
  }

`;

const ToppingsListContainer = styled.div`
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

const ToppingsList = styled.div``;

const ToppingsItems = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 60px;
  margin-bottom: 50px;

  @media screen and (max-width: 1300px) {
    width: 300px;
  }

  @media screen and (max-width: 900px) {
    width: 400px;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 450px;
    max-width: 90%;
    justify-content: center;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 414px) {
    margin-right: 25px;
  }

`;

const ToppingsImage = styled.img`
  object-fit: cover;
  width: 170px;
  height: 130px;
  border-bottom: 1px solid #e8e8e8;
  border-radius: 5%;
  margin-bottom: 20px;

  @media screen and (max-width: 900px) {
    border-bottom: none;
    margin-left: 50px;
  }

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
  margin-left: 15px;

  @media screen and (max-width: 900px) {
    padding-bottom: 15px;
  }

  @media screen and (max-width: 600px) {
    width: 200px;
    margin-left: 30px;
  }

`;
