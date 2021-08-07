import React from 'react';
import styled from 'styled-components';

function Snack() {
  return (
    <SnackContainer>
      <SnackSubContainer>
        <SnackTitle>Snack</SnackTitle>
        <SnackListContainer>
          <SnackList>
            <SnackItems>
              <SnackImage src='images/Classic_milk_tea.jpeg' />
              <SnackItem>A1 FreshLemon Milk Tea</SnackItem>
            </SnackItems>
            <SnackItems>
              <SnackImage src='images/Classic_milk_tea.jpeg' />
              <SnackItem>A1 FreshLemon Milk Tea</SnackItem>
            </SnackItems>
          </SnackList>

          <SnackList>
            <SnackItems>
              <SnackImage src='images/Classic_milk_tea.jpeg' />
              <SnackItem>A1 FreshLemon Milk Tea</SnackItem>
            </SnackItems>
            <SnackItems>
              <SnackImage src='images/Classic_milk_tea.jpeg' />
              <SnackItem>A1 FreshLemon Milk Tea</SnackItem>
            </SnackItems>
          </SnackList>
        </SnackListContainer>
      </SnackSubContainer>
    </SnackContainer>
  );
}

export default Snack;

const SnackContainer = styled.div`
  margin-top: 100px;
`;

const SnackTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  color: rgb(144, 35, 2);
`;

const SnackSubContainer = styled.div`
  height: 640px;
  width: 1200px;
  border: 5px double rgb(144, 35, 2);
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #fff;
`;

const SnackListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 50px 50px;
`;

const SnackList = styled.div``;

const SnackItems = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 60px;
`;

const SnackImage = styled.img`
  object-fit: cover;
  width: 170px;
  height: 170px;
  border-bottom: 1px solid #e8e8e8;
`;

const SnackItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  width: 300px;
  text-transform: uppercase;
  color: rgb(144, 35, 2);
  font-weight: normal;
  font-family: 'Righteous';
  font-size: 20px;
`;
