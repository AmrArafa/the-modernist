import React from 'react';
import styled from 'styled-components';
import Container from '../container';
import HeaderNav from './header_nav';

const HeaderWrapper = styled.header`
  background-color: #290000;
  color: #fff;
  height: 140px;
  position: relative;

  ::before {
    content: '';
    height: 5px;
    width: 100%;
    background-color: #76c38f;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const FlexContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  margin: 0;

  span {
    font-size: 11px;
    display: block;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <FlexContainer>
        <HeaderTitle>
          The Modernist
          <span>Free PSD Website Template</span>
        </HeaderTitle>
        <HeaderNav />
      </FlexContainer>
    </HeaderWrapper>
  )
}

export default Header;