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
  padding-top: 75px;
  color: #902302;
`;

const SectionATitleTwo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #902302;
`;

const SectionADescription = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;
