import React from 'react';
import styled from 'styled-components';

function SaltedCheeseSeries() {
  return (
    <SaltedCheeseSeriesContainer>
      <SaltedCheeseSeriesSubContainer>
        <SaltedCheeseSeriesTitle>Salted Cheese Series</SaltedCheeseSeriesTitle>
        <SaltedCheeseSeriesListContainer>
          <SaltedCheeseSeriesList>
            <SaltedCheeseSeriesItems>
              <SaltedCheeseSeriesImage src='images/classic_milk_tea.jpeg' />
              <SaltedCheeseSeriesItem>
                A1 Classic Milk Tea
              </SaltedCheeseSeriesItem>
            </SaltedCheeseSeriesItems>
            <SaltedCheeseSeriesItems>
              <SaltedCheeseSeriesImage src='images/classic_milk_tea.jpeg' />
              <SaltedCheeseSeriesItem>
                A1 Classic Milk Tea
              </SaltedCheeseSeriesItem>
            </SaltedCheeseSeriesItems>
            <SaltedCheeseSeriesItems>
              <SaltedCheeseSeriesImage src='images/classic_milk_tea.jpeg' />
              <SaltedCheeseSeriesItem>
                A1 Classic Milk Tea
              </SaltedCheeseSeriesItem>
            </SaltedCheeseSeriesItems>
            <SaltedCheeseSeriesItems>
              <SaltedCheeseSeriesImage src='images/classic_milk_tea.jpeg' />
              <SaltedCheeseSeriesItem>
                A1 Classic Milk Tea
              </SaltedCheeseSeriesItem>
            </SaltedCheeseSeriesItems>
            <SaltedCheeseSeriesItems>
              <SaltedCheeseSeriesImage src='images/classic_milk_tea.jpeg' />
              <SaltedCheeseSeriesItem>
                A1 Classic Milk Tea
              </SaltedCheeseSeriesItem>
            </SaltedCheeseSeriesItems>
            <SaltedCheeseSeriesItems>
              <SaltedCheeseSeriesImage src='images/classic_milk_tea.jpeg' />
              <SaltedCheeseSeriesItem>
                A1 Classic Milk Tea
              </SaltedCheeseSeriesItem>
            </SaltedCheeseSeriesItems>
          </SaltedCheeseSeriesList>

          <SaltedCheeseSeriesList>
            <SaltedCheeseSeriesItems>
              <SaltedCheeseSeriesImage src='images/classic_milk_tea.jpeg' />
              <SaltedCheeseSeriesItem>
                A1 Classic Milk Tea
              </SaltedCheeseSeriesItem>
            </SaltedCheeseSeriesItems>
            <SaltedCheeseSeriesItems>
              <SaltedCheeseSeriesImage src='images/classic_milk_tea.jpeg' />
              <SaltedCheeseSeriesItem>
                A1 Classic Milk Tea
              </SaltedCheeseSeriesItem>
            </SaltedCheeseSeriesItems>
            <SaltedCheeseSeriesItems>
              <SaltedCheeseSeriesImage src='images/classic_milk_tea.jpeg' />
              <SaltedCheeseSeriesItem>
                A1 Classic Milk Tea
              </SaltedCheeseSeriesItem>
            </SaltedCheeseSeriesItems>
            <SaltedCheeseSeriesItems>
              <SaltedCheeseSeriesImage src='images/classic_milk_tea.jpeg' />
              <SaltedCheeseSeriesItem>
                A1 Classic Milk Tea
              </SaltedCheeseSeriesItem>
            </SaltedCheeseSeriesItems>
            <SaltedCheeseSeriesItems>
              <SaltedCheeseSeriesImage src='images/classic_milk_tea.jpeg' />
              <SaltedCheeseSeriesItem>
                A1 Classic Milk Tea
              </SaltedCheeseSeriesItem>
            </SaltedCheeseSeriesItems>
            <SaltedCheeseSeriesItems>
              <SaltedCheeseSeriesImage src='images/classic_milk_tea.jpeg' />
              <SaltedCheeseSeriesItem>
                A1 Classic Milk Tea
              </SaltedCheeseSeriesItem>
            </SaltedCheeseSeriesItems>
          </SaltedCheeseSeriesList>
        </SaltedCheeseSeriesListContainer>
      </SaltedCheeseSeriesSubContainer>
    </SaltedCheeseSeriesContainer>
  );
}

export default SaltedCheeseSeries;

const SaltedCheeseSeriesContainer = styled.div`
  margin-top: 100px;
`;

const SaltedCheeseSeriesTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  color: rgb(144, 35, 2);
`;

const SaltedCheeseSeriesSubContainer = styled.div`
  height: 1400px;
  width: 1200px;
  border: 5px double rgb(144, 35, 2);
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #fff;
`;

const SaltedCheeseSeriesListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 50px 50px;
`;

const SaltedCheeseSeriesList = styled.div``;

const SaltedCheeseSeriesItems = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 60px;
`;

const SaltedCheeseSeriesImage = styled.img`
  object-fit: cover;
  width: 170px;
  height: 170px;
  border-bottom: 1px solid #e8e8e8;
`;

const SaltedCheeseSeriesItem = styled.div`
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
