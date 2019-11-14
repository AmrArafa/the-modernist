import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '../container';
import HeaderNav from './header_nav';
import MenuImage from './images/menu-button.png';

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

  @media (max-width: 960px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 70px;
  }
`;

const StyledContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 960px) {
    padding: 0 10px;
  }
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

const MenuButton = styled.button`
  display: none;

  @media (max-width: 960px) {
    display: block;
    border: 0;
    background-color: transparent;
    width: 40px;
    height: 40px;
    background: url('${MenuImage}') no-repeat;
    background-size: contain;
    padding: 0;

    :focus {
      outline: 0;
    }
  }
`;

const Header = () => {

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleClick = () => {
    setIsMenuOpened(!isMenuOpened);
  }

  return (
    <HeaderWrapper>
      <StyledContainer>
        <HeaderTitle>
          The Modernist
          <span>Free PSD Website Template</span>
        </HeaderTitle>
        <MenuButton onClick={handleClick} />
        <HeaderNav opened={isMenuOpened} />
      </StyledContainer>
    </HeaderWrapper>
  );
}

export default Header;