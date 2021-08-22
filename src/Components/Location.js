import React, { useState } from 'react';
import styled from 'styled-components';
import Mapbox from '../Map/Mapbox';
import DirectionButton from '../MaterialUIFeatures/DirectionButton';

function Location() {
  const [convoy, setConvoy] = useState('convoy');
  const [caminoReal, setCaminoReal] = useState('caminoReal');
  const [eastlake, setEastlake] = useState('eastlake');

  return (
    <LocationContainer>
      <LocationBackgroundContainer>
        <LocationBackground src='images/happy_lemon_logo3.png' />
        {/* <LocationBackgroundVideo
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
          controls={true}
        >
          <LocationBackgroundSource src='images/happy_lemon_location_video_two.mp4' />
        </LocationBackgroundVideo> */}
        {/* <LocationBackground src='images/happy_lemon_location_two.jpeg' /> */}
      </LocationBackgroundContainer>
      <LocationContainerTwo>
        <LocationSubContainer>
          <LocationSubContainerLeft>
            <LocationArea>
              <LocationAreaTitle>San Diego</LocationAreaTitle>
              <LocationAreaAddressSectionArea>
                4633 Convoy St 107
              </LocationAreaAddressSectionArea>
              <LocationAreaAddressSectionTwo>
                San Diego, CA 92111
              </LocationAreaAddressSectionTwo>
              <LocationButton>
                <DirectionButton convoy={convoy} />
              </LocationButton>
              <LocationAreaPhone>(858) 430-6800</LocationAreaPhone>
              <LocationAreaSchedule>
                <LocationAreaDays>Monday - Thursday:</LocationAreaDays>
                <LocationAreaTime>11:00am - 11:00pm</LocationAreaTime>
                <LocationAreaDays>Friday - Saturday:</LocationAreaDays>
                <LocationAreaTime>11:00am - 12:00pm</LocationAreaTime>
                <LocationAreaDays>Sunday:</LocationAreaDays>
                <LocationAreaTime>11:00am - 11:00pm</LocationAreaTime>
              </LocationAreaSchedule>
            </LocationArea>
            <LocationArea>
              <LocationAreaTitle>San Diego</LocationAreaTitle>
              <LocationAreaAddressSectionArea>
                12925 El Camino Real Suite AA2
              </LocationAreaAddressSectionArea>
              <LocationAreaAddressSectionTwo>
                San Diego, CA 92130
              </LocationAreaAddressSectionTwo>
              <LocationButton>
                <DirectionButton caminoReal={caminoReal} />
              </LocationButton>
              <LocationAreaPhone>(858) 925-7052</LocationAreaPhone>
              <LocationAreaSchedule>
                <LocationAreaDays>Monday - Thursday:</LocationAreaDays>
                <LocationAreaTime>11:00am - 11:00pm</LocationAreaTime>
                <LocationAreaDays>Friday - Saturday:</LocationAreaDays>
                <LocationAreaTime>11:00am - 12:00pm</LocationAreaTime>
                <LocationAreaDays>Sunday:</LocationAreaDays>
                <LocationAreaTime>11:00am - 11:00pm</LocationAreaTime>
              </LocationAreaSchedule>
            </LocationArea>
            <LocationArea>
              <LocationAreaTitle>Eastlake</LocationAreaTitle>
              <LocationAreaAddressSectionArea>
                2110 Birch Road, Suite 103
              </LocationAreaAddressSectionArea>
              <LocationAreaAddressSectionTwo>
                Chula Vista, CA 91915
              </LocationAreaAddressSectionTwo>
              <LocationButton>
                <DirectionButton eastlake={eastlake} />
              </LocationButton>
              <LocationAreaPhone>(619) 600-3680</LocationAreaPhone>
              <LocationAreaSchedule>
                <LocationAreaDays>Monday - Thursday:</LocationAreaDays>
                <LocationAreaTime>11:00am - 11:00pm</LocationAreaTime>
                <LocationAreaDays>Friday - Saturday:</LocationAreaDays>
                <LocationAreaTime>11:00am - 12:00pm</LocationAreaTime>
                <LocationAreaDays>Sunday:</LocationAreaDays>
                <LocationAreaTime>11:00am - 11:00pm</LocationAreaTime>
              </LocationAreaSchedule>
            </LocationArea>
          </LocationSubContainerLeft>
          <LocationSubContainerRight>
            <LocationTitle>Our Locations</LocationTitle>
            <Mapbox />
          </LocationSubContainerRight>
        </LocationSubContainer>
      </LocationContainerTwo>
    </LocationContainer>
  );
}

export default Location;

const LocationContainer = styled.div`
  height: 1200px;
  overflow: hidden;

  @media screen and (max-width: 1400px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 1650px;
  }

  @media screen and (max-width: 1100px) {
    height: 1430px;
  }

  @media screen and (max-width: 900px) {
    height: 1770px;
  }
`;

const LocationBackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 80px auto;
  width: 700px;
  max-width: 100%;
  padding-bottom: 25px;
  border-bottom: 5px double #902302;

  @media screen and (max-width: 900px) {
    width: 400px;
  }

  @media screen and (max-width: 414px) {
    width: 350px;
  }

`;

const LocationBackground = styled.img`
  height: 300px;
  width: 700px;
  object-fit: contain;

  @media screen and (max-width: 900px) {
    width: 600px;
  }

  @media screen and (max-width: 414px) {
    width: 400px;
  }

`;

const LocationBackgroundVideo = styled.video`
  height: 500px;
  width: 700px;
  object-fit: cover;
`;

const LocationBackgroundSource = styled.source``;

const LocationContainerTwo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const LocationSubContainer = styled.div`
  display: flex;

  @media screen and (max-width: 1400px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const LocationSubContainerLeft = styled.div`
  height: 37vh;
  width: 400px;
  overflow-y: scroll;
  margin: 0 20px;
  margin-top: 95px;

  @media screen and (max-width: 1400px) {
    display: flex;
    justify-content: space-between;
    width: 1000px;
    max-width: 100%;
    height: 530px;
    overflow: hidden;
    margin-top: 1px;
    margin-bottom: 25px;
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
    margin-bottom: -230px;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    width: 300px;
    height: 800px;
    margin-top: -55px;
    margin-bottom: 100px;
  }
`;

const LocationArea = styled.div`
  padding-bottom: 30px;
  border-bottom: 2px solid whitesmoke;

  @media screen and (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
    border-bottom: 3px double #902302;
  }

  @media screen and (max-width: 1100px) {
    height: 150px;
  }
`;

const LocationAreaTitle = styled.h3`
  color: #902302;
`;

const LocationAreaAddressSectionArea = styled.p`
  color: #0a4f8a;
  line-height: 0.5;
`;

const LocationAreaAddressSectionTwo = styled.p`
  color: #0a4f8a;
  line-height: 0.5;
`;

const LocationButton = styled.div`
  margin: 30px 0;
`;

const LocationAreaPhone = styled.p`
  color: #0a4f8a;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const LocationAreaSchedule = styled.div`
  line-height: 0.8;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const LocationAreaDays = styled.p``;

const LocationAreaTime = styled.p``;

const LocationSubContainerRight = styled.div`
  margin: 30px 20px;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -50px;
  }
`;

const LocationTitle = styled.h1`
  font-size: 35px;
  color: #902302;
  margin-bottom: 35px;

  @media screen and (max-width: 900px) {
    font-size: 25px;
  }
`;
