import React from 'react';
import styled from 'styled-components';
import Container from '../container';
import WorkCard from './work_card';

const LatestWorkWrapper = styled.section`
  background-color: #660000;
  padding:40px 0 60px 0;
  text-align: center;

  h1 {
    font-size: 32px;
    color: #fff;
    margin: 0;
    font-weight: 400;
    text-transform: uppercase;
    padding: 12px 15px;
    background-color: #303030;
    display: inline-block;
    border-radius: 10px;
    line-height: 1;
    position: relative;
    z-index: 1;
  }
`;

const TitleWrapper = styled.div`
  position: relative;
  margin-bottom: 30px;

  ::after {
    content: '';
    width: 100%;
    height: 3px;
    background-color: #303030;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 0;
  }
`;

const WorkCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const workCards = Array(6).fill(<WorkCard />);

const LatestWork = () => {
  return (
    <LatestWorkWrapper>
      <Container>
        <TitleWrapper>
          <h1>Latest Work</h1>
        </TitleWrapper>
        <WorkCardsWrapper>
          {workCards}
        </WorkCardsWrapper>
      </Container>
    </LatestWorkWrapper>
  );
}

export default LatestWork;