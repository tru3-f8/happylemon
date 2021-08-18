import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ImageSection from './ImageSection';
import SectionA from './SectionA';
import SectionB from './SectionB';
import { setNavbarBackground } from '../features/navbarBackgroundSlice';
import styled from 'styled-components';

function Main() {
  const dispatch = useDispatch();

  const changeNav = () => {
    if (window.scrollY >= 920) {
      dispatch(setNavbarBackground(false));
    } else {
      dispatch(setNavbarBackground(false));
    }
  };

  useEffect(() => {
    // dispatch(setNavbarBackground(false))

    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <MainContainer>
      <ImageSection />
      <SectionA />
      <SectionB />
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  overflow-x: hidden;
`;
