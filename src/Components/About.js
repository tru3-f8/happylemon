import React from 'react';
import styled from 'styled-components';

function About() {
  return (
    <AboutContainer>
      <AboutImage src='images/happy_lemon_logo.jpeg' />
      <AboutSubContainer>
        <AboutTitle>Our Story</AboutTitle>
        <AboutContent>
          Our Happy Lemon location only uses the freshest ingredients. We use
          freshly squeezed lemon juice, grapefruit, strawberries, avocado, mint
          leaves and other natural ingredients in our tea making process. We
          stay away from flavored syrups and avoid sweeteners like fructose.
          Instead, we manually brew our sweeteners from cane sugar and brown
          sugar.
        </AboutContent>
        <AboutContent>
          Happy Lemon is a global Bubble Tea Franchise established in China in
          2006. Happy Lemon spans around the world in over 1500 locations
          including Mainland China, Taiwan, South Korea, Vietnam, Philippines,
          Japan, United Arab Emirates, United Kingdom, Canada, and the United
          States. It is one of the few Bubble Tea brands that is publicly traded
          in the world.
        </AboutContent>
      </AboutSubContainer>
    </AboutContainer>
  );
}

export default About;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 800px;
  width: 1500px;
  max-width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 1100px;
  }

  @media screen and (max-width: 414px) {
    margin-bottom: 50px;
  }

`;

const AboutImage = styled.img`
  height: 380px;
  width: 350px;
  padding-top: 100px;

  @media screen and (max-width: 1100px) {
    padding-top: 180px;
  }

  @media screen and (max-width: 900px) {
   padding-top: 0px;
  }

  @media screen and (max-width: 414px) {
    height: 330px;
    width: 300px;
    margin-top: 35px;
    margin-bottom: -90px;
  }

`;

const AboutSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  max-width: 100%;
  padding-top: 140px;
  margin-left: 150px;

  @media screen and (max-width: 900px) {
    width: 80%;
    margin: 0 auto;
  }

`;

const AboutTitle = styled.h1`
  color: #902302;
`;

const AboutContent = styled.p`
  text-indent: 20px;
  line-height: 1.6;

`;
