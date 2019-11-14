import React from 'react';
import styled from 'styled-components';
import Container from '../container';

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CopyRightWrapper = styled.div`
  font-size: 13px;
  color: #979797;
  padding: 25px 0;
  border-top: 1px solid #000;
  background-color: #2b2b2b;

  p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 767px) {
    p + p {
      margin-top: 15px;
    }
  }
`;

const CopyRight = () => {
  return (
    <CopyRightWrapper>
      <StyledContainer>
        <p>
          Copyright &copy; 2013 <a href="#!">Domain Name</a> - All Rights Reserved
        </p>
        <p>Template by OS Templates</p>
      </StyledContainer>
    </CopyRightWrapper>
  );
}

export default CopyRight;