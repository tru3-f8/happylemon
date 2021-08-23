import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectNavbarMainPageBackground,
  setNavbarBackground,
} from '../features/navbarBackgroundSlice';
import HamburgerIcon from '../MaterialUIFeatures/NavbarIcon';

function NavbarMainPage() {
  const navbarMainPageBackground = useSelector(selectNavbarMainPageBackground);
  const dispatch = useDispatch();

  const setNavBackground = () => {
    dispatch(setNavbarBackground(false));

    window.scrollTo({
      top: 0,
    });

    console.log('test');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <NavbarContainer background={navbarMainPageBackground}>
      <NavbarImageContainer>
        <NavbarListItem to='/' onClick={scrollToTop}>
          <NavbarImage src='images/happy_lemon_logo.jpeg' />
        </NavbarListItem>
      </NavbarImageContainer>
      <NavbarListContainer>
        <NavbarList>
          <NavbarListItem to='menu' onClick={setNavBackground}>
            Menu
          </NavbarListItem>
          <NavbarListItem to='location' onClick={setNavBackground}>
            Location
          </NavbarListItem>
          <NavbarListItem to='/' onClick={scrollToTop}>
            <NavbarImage src='images/happy_lemon_logo.jpeg' />
          </NavbarListItem>
          <NavbarListItem to='about' onClick={setNavBackground}>
            About
          </NavbarListItem>
          <NavbarListItem to='contact' onClick={setNavBackground}>
            Contact
          </NavbarListItem>
        </NavbarList>
      </NavbarListContainer>
      <NavbarHamburgerContainer>
        <HamburgerIcon />
      </NavbarHamburgerContainer>
    </NavbarContainer>
  );
}

export default NavbarMainPage;

const NavbarContainer = styled.div`
  display: flex;
  background: ${({ background }) => (background ? '#fff' : 'rgb(254, 216, 0)')};
  height: 110px;
  position: sticky;
  z-index: 10;
  top: 0;
  text-transform: uppercase;
`;

const NavbarImageContainer = styled.div`
  transform: translate(-10000px);
  width: 30px;

  @media screen and (max-width: 700px) {
    transform: translate(0px);
    margin-top: 6px;
  }
`;

const NavbarListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media screen and (min-width: 768px) {
    width: 750px;
    margin: 0 auto;
  }
`;

const NavbarHamburgerContainer = styled.div`
  transform: translate(-10000px);
  width: 30px;

  @media screen and (max-width: 700px) {
    transform: translate(0px);
    padding-top: 30px;
    padding-right: 30px;
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const NavbarList = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 700px) {
    display: none;
  }
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

  @media screen and (min-width: 700px) {
    &:hover {
      border-bottom: 3px solid #902302;
      padding-bottom: 15px;
      font-size: 18px;
      font-weight: bold;
      color: #902302;
    }
  }
`;
