import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarListContainer>
        <NavbarList>
          <NavbarListItem to='menu'>Menu</NavbarListItem>
          <NavbarListItem>Location</NavbarListItem>
          <NavbarListItem to='/' >
            <NavbarImage src='images/happy_lemon_logo.jpeg' />
          </NavbarListItem>
          <NavbarListItem>About</NavbarListItem>
          <NavbarListItem>Contact</NavbarListItem>
        </NavbarList>
      </NavbarListContainer>
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.div`
  /* background: #fff; */
  background: rgb(254, 216, 0);
  height: 100px;
  position: sticky;
  z-index: 10;
  top: 0;
  text-transform: uppercase;
`;

const NavbarListContainer = styled.div`
  justify-content: center;
  align-items: center;
  height: 100%;

  @media screen and (min-width: 768px) {
    width: 750px;
    margin: 0 auto;
  }
`;

const NavbarList = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

const NavbarImage = styled.img`
  object-fit: contain;
  width: 100px;
  height: 80px;
`;

const NavbarListItem = styled(Link)`
  color: #000;
  padding: 0 30px;
  cursor: pointer;
  text-decoration: none;
`;
