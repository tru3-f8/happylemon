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
`;

const AboutImage = styled.img`
  max-width: 50%;
  max-height: 50%;
  padding-top: 100px;
`;

const AboutSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  padding-top: 140px;
  margin-left: 150px;
`;

const AboutTitle = styled.h1`
  color: #902302;
`;

const AboutContent = styled.p`
  text-indent: 20px;
  line-height: 1.6;
`;
