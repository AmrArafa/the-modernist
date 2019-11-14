import React from 'react';
import Slider from 'react-slick';
import Slide from './slide';
import styled from 'styled-components';
import Container from '../container';
import LeftArrow from './images/left_arrow.png';
import RightArrow from './images/right_arrow.png';
import 'slick-carousel/slick/slick.css';

const SliderWrapper = styled.section`
  background-color: #290000;
  padding-bottom: 50px;

  @media (max-width: 960px) {
    padding-top: 100px;
  }
`;

const StyledContainer = styled(Container)`
  padding: 0 60px;
  position: relative;

  .slick-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: 0;
    text-indent: -9999px;
    width: 15px;
    height: 28px;
    cursor: pointer;
  }

  .slick-prev {
    left: -60px;
    background-image: url('${LeftArrow}');

    @media (max-width: 812px) {
      left: -20px;
    }
  }

  .slick-next {
    right: -60px;
    background-image: url('${RightArrow}');

    @media (max-width: 812px) {
      right: -20px;
    }
  }

  @media (max-width: 812px) {
    padding: 0 30px;

    .slick-slide img {
      width: 60vw;
    }
  }
`;

const LandingPageSlider = () => {
  const settings = {
    dots: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SliderWrapper>
      <StyledContainer>
        <Slider {...settings}>
          <Slide />
          <Slide />
          <Slide />
        </Slider>
      </StyledContainer>
    </SliderWrapper>
  );
}

export default LandingPageSlider;