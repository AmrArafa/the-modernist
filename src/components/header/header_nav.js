import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      display: inline-block;
      text-transform: uppercase;
    }

    a {
      color: inherit;
      text-decoration: none;
      padding: 12px 20px;
      border-radius: 10px;
      transition: background-color 0.4s;
    }

    a:hover {
      background-color: #76c38f;
    }
  }
`;

const HeaderNav = () => {
  return (
    <NavBar>
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
  )
}

export default HeaderNav;

