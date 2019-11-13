import React from 'react';
import styled from 'styled-components';

const ServiceCardWrapper = styled.div`
  text-align: center;

  + div {
    margin-left: 20px;
  }

  a {
    display: inline-block;
    color: #333333;
    background-color: #fff;
    text-decoration: none;
    padding: 20px 0;
    transition: color 0.4s, background-color 0.4s;
  }

  p:first-child {
    color: #fff;
    background-color: #333333;
    font-size: 18px;
    width: 120px;
    height: 120px;
    line-height: 120px;
    margin: 0 auto 17px;
    transition: color 0.4s, background-color 0.4s;
  }

  h1 {
    font-size: 32px;
    font-weight: 400;
    text-transform: uppercase;
    padding: 0 45px;
    line-height: 1;
    margin: 0 0 24px 0;
  }

  p:last-child {
    font-size: 12px;
    padding: 0 45px;
    margin: 0;
    line-height: 1.3;
  }

  a:hover {
    background-color: #76c38f;
    color: #fff;

    p:first-child {
      color: #333;
      background-color: #fff;
    }
  }
`;

const ServiceCard = () => {
  return (
    <ServiceCardWrapper>
      <a href="#!">
        <p>120 x 120px</p>
        <h1>Service Title</h1>
        <p>Vestassapede et donec ut est libe ros sus et eget sed eget quisq ueta habitur augue</p>
      </a>
    </ServiceCardWrapper>
  )
}

export default ServiceCard;