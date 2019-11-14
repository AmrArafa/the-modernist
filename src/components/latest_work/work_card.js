import React from 'react';
import styled from 'styled-components';
import WorkCardImage from './images/work_card_image.png';

const WorkCardWrapper = styled.div`
  position: relative;
  border: 5px solid #fff;
  transition: border-color 0.4s;

  :nth-child(n+4) {
    margin-top: 30px;
  }

  a {
    display: inline-block;
  }

  img {
    vertical-align: middle;
  }

  p {
    color: #fff;
    background-color:rgba(0, 0, 0, 0.6);
    text-transform: uppercase;
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: 0;
    line-height: 1;
    padding: 10px 0;
    transition: opacity 0.4s;
  }

  :hover {
    border-color: #76c38f;
    p {
      opacity: 0;
    }
  }
`;

const WorkCard = () => {
  return (
    <WorkCardWrapper>
      <a href="#!">
        <img src={WorkCardImage} alt=""/>
        <p>Lorem Ipsum Dolor</p>
      </a>
    </WorkCardWrapper>
  );
}

export default WorkCard;