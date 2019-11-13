import React from 'react';
import styled from 'styled-components';
import Container from '../container';
import ServiceCard from './service_card';

const ServicesWrapper = styled.section`
  background-color: #660000;
  padding-top: 60px;
`;

const StyledContainer = styled(Container)`
  display: flex;
`;

const Services = () => {
  return (
    <ServicesWrapper>
      <StyledContainer>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </StyledContainer>
    </ServicesWrapper>
  )
}

export default Services;