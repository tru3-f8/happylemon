import React from 'react';
import styled from 'styled-components';

function Menu() {
  return (
    <MenuContainer>
      <MenuTitle>Menu</MenuTitle>
      <MenuList></MenuList>
    </MenuContainer>
  );
}

export default Menu;

const MenuContainer = styled.div`
  background: rgb(254, 216, 0);
  height: 100vh;
`;

const MenuTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;

const MenuList = styled.div`
height: 900px;
width: 1200px;
border: 3px solid;
justify-content: center;
align-items: center;
margin: 0 auto;
`;

