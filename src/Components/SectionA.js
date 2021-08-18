import React from 'react';
import styled from 'styled-components';

function SectionA() {
  return (
    <SectionAContainer>
      <SectionATitleOne>ENJOY FRESHLY BREWED TEA &</SectionATitleOne>
      <SectionATitleTwo>SHARE THE HAPPINESS</SectionATitleTwo>
      <SectionADescription>
        Since 1998, Happy lemon has dedicated itself to producing the best line
        of teas around the globe. It's time to enjoy the amazing, irresistible
        taste!
      </SectionADescription>
    </SectionAContainer>
  );
}

export default SectionA;

const SectionAContainer = styled.div`
  height: 300px;
  background: rgb(254, 216, 0);

`;

const SectionATitleOne = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #902302;
  width: 100%;
  padding-top: 75px;

  @media screen and (max-width: 520px) {
   font-size: 30px;
  }

`;

const SectionATitleTwo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #902302;
  width: 100%;

  @media screen and (max-width: 520px) {
   font-size: 30px;
  }

`;

const SectionADescription = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 15px;

  @media screen and (max-width: 1120px) {
   width: 98%;
  }

  @media screen and (max-width: 520px) {
   font-size: 14px;
  }

`;

