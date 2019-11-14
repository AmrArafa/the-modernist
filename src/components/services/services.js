import React from 'react';
import styled from 'styled-components';
import Container from '../container';
import ServiceCard from './service_card';
import VisuallyHiddenTitle from '../visually_hidden_title';

const ServicesWrapper = styled.section`
  background-color: #660000;
  padding-top: 60px;

  @media (max-width: 767px) {
    padding: 60px 10px 0 10px;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;

  @media (max-width: 960px) {
    flex-direction: column;
  }

  @media (max-width: 767px) {
    width: 70vw;
  }
`;

const Services = () => {
  return (
    <ServicesWrapper>
      <VisuallyHiddenTitle>Services</VisuallyHiddenTitle>
      <StyledContainer>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </StyledContainer>
    </ServicesWrapper>
  );
}

export default Services;