import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageSection from './ImageSection';
import SectionA from './SectionA';
import SectionB from './SectionB';
import { setNavbarBackground } from '../features/navbarBackgroundSlice';


function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavbarBackground(true))
  }, [])

  return (
    <div>
      <ImageSection />
      <SectionA />
      <SectionB />
    </div>
  );
}

export default Main;
