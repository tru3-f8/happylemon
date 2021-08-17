import React from 'react';
import styled from 'styled-components';
import ClassicSeries from './ClassicSeries';
import FreshLemonSeries from './FreshLemonSeries';
import FruitTeas from './FruitTeas';
import SaltedCheeseSeries from './SaltedCheeseSeries';
import Smoothies from './Smoothies';
import Snack from './Snack';
import Toppings from './Toppings';
import MenuButton from '../MaterialUIFeatures/MenuButton';


function Menu() {
  return (
    <MenuContainer>
      <MenuTitle>
        <MenuButton />
      </MenuTitle>
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
  height: 590vh;
`;

const MenuTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  margin-bottom: 80px;
`;

