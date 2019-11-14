import React from 'react';
import styled from 'styled-components';
import SlideImage from './images/slide_image.png';

const SlideWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 812px) {
    flex-direction: column-reverse;
  }
`;

const SlideContentWrapper = styled.div`
  color: #fff;
  padding-right: 100px;

  h1 {
    font-size: 46px;
    font-weight: 400;
    line-height: 1;
    margin: 0 0 30px 0;

    @media (max-width: 767px) {
      font-size: 32px;
      margin: 15px 0;
    }
  }

  p {
    font-size: 12px;
    margin: 0 0 20px 0;
  }

  a {
    padding: 12px 16px;
    color: inherit;
    font-size: 13px;
    text-decoration: none;
    background-color: #76c38f;
    border-radius: 10px;
    display: inline-block;
  }

  @media (max-width: 812px) {
    padding-right: 0;
    margin-bottom: 15px;
    text-align: center;
  }
`;

const Slide = () => {
  return (
    <SlideWrapper>
      <SlideContentWrapper>
        <h1>Cursus penati saccum nulla.</h1>
        <p>Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna. Urnaultrices quis curabitur phasellentesque congue magnis vestibulum quismodo nulla et feugiat adipiscinia pellentum leo.</p>
        <a href="#!">Read More Here &raquo;</a>
      </SlideContentWrapper>
      <img src={SlideImage} alt="" />
    </SlideWrapper>
  );
}

export default Slide;