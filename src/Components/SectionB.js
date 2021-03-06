import React from 'react';
import styled from 'styled-components';

function SectionB() {
  return (
    <SectionBContainer>
      <SectionBSubContainer>
        <SectionFirstImage src='images/main_image1.jpeg' />
        <SectionSecondImage src='images/main_image2.jpeg' />
        <SectionThirdImage src='images/main_image3.jpeg' />

        <SectionFourthImage src='images/main_image4.jpeg' />
        <SectionFifthImage src='images/main_image5.jpeg' />
        <SectionSixthImage src='images/main_image6.jpeg' />

        <SectionSeventhImage src='images/main_image7.jpeg' />
        <SectionEighthImage src='images/main_image8.jpeg' />
        <SectionNinthImage src='images/main_image9.jpeg' />

        <SectionTenthImage src='images/main_image10.jpeg' />
        <SectionEleventhImage src='images/main_image11.jpeg' />
      </SectionBSubContainer>
    </SectionBContainer>
  );
}

export default SectionB;

const SectionBContainer = styled.div`
  height: 1600px;
  background: rgb(254, 216, 0);
 
`;

const SectionBSubContainer = styled.div`
  display: grid;
  grid-template-columns: 500px 500px 500px;
  grid-template-areas:
    'firstImage secondImage thirdImage'
    'fourthImage fifthImage sixthImage'
    'seventhImage eighthImage ninthImage'
    'tenthImage eleventhImage'
    ;
  justify-content: center;
`;

const SectionFirstImage = styled.img`
  grid-area: firstImage;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  justify-self: end;
  width: 400px;
  border-top-left-radius: 10px;
`;

const SectionSecondImage = styled.img`
  grid-area: secondImage;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  justify-self: stretch;
  width: 500px;
`;

const SectionThirdImage = styled.img`
  grid-area: thirdImage;
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  justify-self: stretch;
  width: 400px;
  border-top-right-radius: 10px;
`;

const SectionFourthImage = styled.img`
  grid-area: fourthImage;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  padding-top: 600px;
  justify-self: end;
  width: 400px;
`;

const SectionFifthImage = styled.img`
  grid-area: fifthImage;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  justify-self: stretch;
  padding-top: 330px;
  width: 500px;
`;

const SectionSixthImage = styled.img`
  grid-area: sixthImage;
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  padding-top: 600px;
  justify-self: start;
  width: 400px;
`;

const SectionSeventhImage = styled.img`
  grid-area: seventhImage;
  grid-column: 1 / 2;
  grid-row: 1 / 4;
  padding-top: 867px;
  justify-self: end;
  width: 400px;
  height: 300px;
`;

const SectionEighthImage = styled.img`
  grid-area: eighthImage;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  justify-self: stretch;
  padding-top: 1080px;
  width: 500px;
`;

const SectionNinthImage = styled.img`
  grid-area: ninthImage;
  grid-column: 3 / 4;
  grid-row: 1 / 4;
  padding-top: 867px;
  justify-self: start;
  width: 400px;
  height: 300px;
`;

const SectionTenthImage = styled.img`
  grid-area: tenthImage;
  grid-column: 1 / 2;
  grid-row: 1 / 4;
  padding-top: 1164px;
  justify-self: end;
  width: 400px;
  height: 250px;
  border-bottom-left-radius: 10px;
`;

const SectionEleventhImage = styled.img`
  grid-area: eleventhImage;
  grid-column: 3 / 4;
  grid-row: 1 / 4;
  padding-top: 1164px;
  justify-self: start;
  width: 400px;
  height: 250px;
  border-bottom-right-radius: 10px;
`;
