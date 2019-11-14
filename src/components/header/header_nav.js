import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 13px;
    li {
      display: inline-block;
      text-transform: uppercase;

      @media (max-width: 960px) {
        display: block;
        text-align: center;
      }
    }

    a {
      color: inherit;
      text-decoration: none;
      padding: 12px 20px;
      border-radius: 10px;
      transition: background-color 0.4s;

      @media (max-width: 960px) {
        display: block;
      }
    }

    a:hover {
      background-color: #76c38f;

      @media (max-width: 960px) {
        background-color: transparent;
      }
    }
  }

  @media (max-width: 960px) {
    position: absolute;
    top: 70px;
    right: -50vw;
    width: 50vw;
    background-color: #290000;
    box-shadow: none;
    transition: box-shadow 0.4s, right 0.4s;

    &.opened {
      right: 0;
      box-shadow: -10px 10px 24px 0px rgba(0,0,0,0.7);
    }
  }
`;

const HeaderNav = (props) => {
  const { opened } = props;
  return (
    <NavBar className={opened ? 'opened' : ''}>
      <ul>
        <li>
          <a href="#!">Home</a>
        </li>
        <li>
          <a href="#!">Style Demo</a>
        </li>
        <li>
          <a href="#!">FullWidth</a>
        </li>
        <li>
          <a href="#!">Dropdown</a>
        </li>
        <li>
          <a href="#!">Portfolio</a>
        </li>
        <li>
          <a href="#!">Gallery</a>
        </li>
      </ul>
    </NavBar>
  );
}

export default HeaderNav;

