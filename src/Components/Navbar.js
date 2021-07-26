import React from 'react';
import styled from 'styled-components';

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarListContainer>
        <NavbarList>
          <NavbarListItem>Menu</NavbarListItem>
          <NavbarListItem>Location</NavbarListItem>
          <NavbarListItem>Top 10</NavbarListItem>
          <NavbarListItem>About</NavbarListItem>
          <NavbarListItem>Contact</NavbarListItem>
        </NavbarList>
      </NavbarListContainer>
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.div`
  background: #fff;
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

const NavbarListItem = styled.div`
   color: #000;
   padding: 0 30px;
`;
