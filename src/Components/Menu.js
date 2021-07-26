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
  height: 100vh;
`;

const MenuTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  margin-bottom: 80px;
`;

const MenuList = styled.div`
  height: 900px;
  width: 1200px;
  border: 3px solid;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #fff;
`;
