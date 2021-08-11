import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectNavbarBackground, setNavbarBackground } from '../features/navbarBackgroundSlice';

function Navbar() {
  const background = useSelector(selectNavbarBackground);
  const dispatch = useDispatch();
  
  const setNavBackground = () => {
    dispatch(setNavbarBackground(false));
  };

  // const setNavDefaultBackground = () => {
  //   dispatch(setNavbarBackground(true));
  // };

  return (
    <NavbarContainer background={background}>
      <NavbarListContainer>
        <NavbarList>
          <NavbarListItem to='menu' onClick={setNavBackground}>
            Menu
          </NavbarListItem>
          <NavbarListItem>Location</NavbarListItem>
          <NavbarListItem to='/'>
            <NavbarImage src='images/happy_lemon_logo.jpeg' />
          </NavbarListItem>
          <NavbarListItem to='about' onClick={setNavBackground}>About</NavbarListItem>
          <NavbarListItem>Contact</NavbarListItem>
        </NavbarList>
      </NavbarListContainer>
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.div`
  background: ${({ background }) => (background ? `#fff` : `rgb(254, 216, 0)`)};
  height: 110px;
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
  background: #fff;
  border-radius: 100%;
  padding: 8px;

  &:hover {
    animation: rotation 1s infinite linear;

    @keyframes rotation {
      from {
        transform: rotateZ(0deg);
      }
      to {
        transform: rotateZ(359deg);
      }
    }
  }
`;

const NavbarListItem = styled(Link)`
  color: #000;
  padding: 0 30px;
  cursor: pointer;
  text-decoration: none;
`;
