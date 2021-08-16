import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ImageSection from './ImageSection';
import SectionA from './SectionA';
import SectionB from './SectionB';
import { setNavbarBackground } from '../features/navbarBackgroundSlice';


function Main() {
  // const dispatch = useDispatch();
 
  // const changeNav = () => {
  //   if (window.scrollY >= 920) {
  //     dispatch(setNavbarBackground(true))
  //   } else {
  //     dispatch(setNavbarBackground(false))
  //   }
  // };

  // useEffect(() => {
  //   // dispatch(setNavbarBackground(false))

  //   window.addEventListener("scroll", changeNav);

  // }, [])


  return (
    <>
      <ImageSection />
      <SectionA />
      <SectionB />
    </>
  );
}

export default Main;
