import React from 'react';
import styled from 'styled-components';

function Menu() {
  return (
    <MenuContainer>
      <MenuTitle>Menu</MenuTitle>
      <MenuSubContainer>
        <MenuListContainer>
          <MenuList>
            <MenuItems>
              <MenuImage src='images/classic_milk_tea.jpeg' />
              <MenuItem>A1 Classic Milk Tea</MenuItem>
            </MenuItems>
            <MenuItems>
              <MenuImage src='images/classic_milk_tea.jpeg' />
              <MenuItem>A1 Classic Milk Tea</MenuItem>
            </MenuItems>
            <MenuItems>
              <MenuImage src='images/classic_milk_tea.jpeg' />
              <MenuItem>A1 Classic Milk Tea</MenuItem>
            </MenuItems>
            <MenuItems>
              <MenuImage src='images/classic_milk_tea.jpeg' />
              <MenuItem>A1 Classic Milk Tea</MenuItem>
            </MenuItems>
            <MenuItems>
              <MenuImage src='images/classic_milk_tea.jpeg' />
              <MenuItem>A1 Classic Milk Tea</MenuItem>
            </MenuItems>
            <MenuItems>
              <MenuImage src='images/classic_milk_tea.jpeg' />
              <MenuItem>A1 Classic Milk Tea</MenuItem>
            </MenuItems>
          </MenuList>
          <MenuList>
            <MenuItems>
              <MenuImage src='images/classic_milk_tea.jpeg' />
              <MenuItem>A1 Classic Milk Tea</MenuItem>
            </MenuItems>
            <MenuItems>
              <MenuImage src='images/classic_milk_tea.jpeg' />
              <MenuItem>A1 Classic Milk Tea</MenuItem>
            </MenuItems>
            <MenuItems>
              <MenuImage src='images/classic_milk_tea.jpeg' />
              <MenuItem>A1 Classic Milk Tea</MenuItem>
            </MenuItems>
            <MenuItems>
              <MenuImage src='images/classic_milk_tea.jpeg' />
              <MenuItem>A1 Classic Milk Tea</MenuItem>
            </MenuItems>
            <MenuItems>
              <MenuImage src='images/classic_milk_tea.jpeg' />
              <MenuItem>A1 Classic Milk Tea</MenuItem>
            </MenuItems>
            <MenuItems>
              <MenuImage src='images/classic_milk_tea.jpeg' />
              <MenuItem>A1 Classic Milk Tea</MenuItem>
            </MenuItems>
          </MenuList>
        </MenuListContainer>
      </MenuSubContainer>
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

const MenuSubContainer = styled.div`
  height: 1250px;
  width: 1200px;
  border: 3px solid;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #fff;
`;

const MenuListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 50px 50px;
`;

const MenuList = styled.div``;

const MenuItems = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 60px;
`;

const MenuImage = styled.img`
  object-fit: cover;
  width: 170px;
  height: 170px;
  border-bottom: 1px solid #e8e8e8;
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  width: 300px;
  text-transform: uppercase;
  color: rgb(144, 35, 2);
  font-weight: normal;
  font-family: "Righteous";
  font-size: 20px;
`;
