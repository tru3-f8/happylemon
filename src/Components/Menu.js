import React from 'react';
import styled from 'styled-components';
import ClassicSeries from './ClassicSeries';
import FreshLemonSeries from './FreshLemonSeries';
import FruitTeas from './FruitTeas';
import SaltedCheeseSeries from './SaltedCheeseSeries';
import Smoothies from './Smoothies';
import Snack from './Snack';
import Toppings from './Toppings';

function Menu() {
  return (
    <MenuContainer>
      <MenuTitle>Menu</MenuTitle>
      <ClassicSeries />
      <FreshLemonSeries />
      <Smoothies />
      <SaltedCheeseSeries />
      <FruitTeas />
      <Snack />
      <Toppings />
    </MenuContainer>
  );
}

export default Menu;

const MenuContainer = styled.div`
  /* height: 600vh; */
  height: 660vh;
  
`;

const MenuTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  margin-bottom: 80px;
`;
