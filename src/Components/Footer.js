import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer>
      <FooterSubContainer>
        <FooterBox>
          <FooterLocationColumns>
            <FooterLocationHeader>Eastlake</FooterLocationHeader>
            <FooterLocation>2110 Birch Road, Suite 103</FooterLocation>
            <FooterLocation>Chula Vista, CA 91915</FooterLocation>
            <FooterLocation>(619) 600-3680</FooterLocation>
          </FooterLocationColumns>
          <FooterLocationColumns>
            <FooterLocationHeader>San Diego</FooterLocationHeader>
            <FooterLocation>4633 Convoy St 107</FooterLocation>
            <FooterLocation>San Diego, CA 92111</FooterLocation>
            <FooterLocation>(858) 430-6800</FooterLocation>
          </FooterLocationColumns>
          <FooterLocationColumns>
            <FooterLocationHeader>San Diego</FooterLocationHeader>
            <FooterLocation>12925 El Camino Real Suite AA2</FooterLocation>
            <FooterLocation>San Diego, CA 92130</FooterLocation>
            <FooterLocation>(510) 364-8125</FooterLocation>
          </FooterLocationColumns>
          <FooterLocationColumns>
            <FooterLocationContact>
              <FooterLocationHeader>Contact</FooterLocationHeader>
              <FooterLocationSubHeader>
                Monday - Thursday
              </FooterLocationSubHeader>
              <FooterLocation>11:00am - 11:00pm</FooterLocation>
              <FooterLocationSubHeader>
                Friday - Saturday
              </FooterLocationSubHeader>
              <FooterLocation>11:00am - 12:00am</FooterLocation>
              <FooterLocationSubHeader>Sunday</FooterLocationSubHeader>
              <FooterLocation>11:00am - 11:00pm</FooterLocation>
              <FooterLocationSubHeader>
                happylemon.sd@gmail.com
              </FooterLocationSubHeader>
            </FooterLocationContact>
          </FooterLocationColumns>
        </FooterBox>
        <FooterLocationColumns>
          <FooterImage src='images/happy_lemon_image.jpeg' />
        </FooterLocationColumns>
      </FooterSubContainer>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;
  width: 100%;
  background: #000;
  overflow: hidden;

  @media screen and (max-width: 1200px) {
    height: 700px;
}

`;

const FooterSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1500px;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
}

`;

const FooterBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 35px;
  width: 1500px;

  @media screen and (max-width: 1450px) {
    width: 700px;
  }

  @media screen and (max-width: 730px) {
    display: none;
  }

`;

const FooterLocationColumns = styled.div`
  color: #fff;
  margin-right: 30px;

  @media screen and (max-width: 1450px) {
    font-size: 14px;
  }
`;

const FooterLocationContact = styled.div``;

const FooterImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
  margin-top: 30px;
  margin-left: 50px;

`;

const FooterLocationHeader = styled.h3`
  font-size: 20px;
`;

const FooterLocation = styled.p``;

const FooterLocationSubHeader = styled.h4``;
