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
        <LocationBackground src='images/happy_lemon_location_three.jpeg' />
        <LocationBackgroundVideo
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
          controls={true}
        >
          <LocationBackgroundSource src='images/happy_lemon_location_video_two.mp4' />
        </LocationBackgroundVideo>
        <LocationBackground src='images/happy_lemon_location_two.jpeg' />
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
  height: 100vh;
`;

const LocationBackgroundContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const LocationBackground = styled.img`
  height: 500px;
  width: 100%;
  object-fit: cover;
`;

const LocationBackgroundVideo = styled.video`
  height: 500px;
  min-width: 600px;
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
`;

const LocationSubContainerLeft = styled.div`
  height: 35vh;
  width: 600px;
  overflow-y: scroll;
  margin: 0 20px;
  margin-top: 48px;
`;

const LocationArea = styled.div`
  padding-bottom: 30px;
  border-bottom: 2px solid whitesmoke;
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
`;

const LocationAreaSchedule = styled.div`
  line-height: 0.8;
`;

const LocationAreaDays = styled.p``;

const LocationAreaTime = styled.p``;

const LocationSubContainerRight = styled.div`
  margin: 0 20px;
`;

const LocationTitle = styled.h1`
  color: #902302;
`;
