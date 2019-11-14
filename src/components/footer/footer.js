import React from 'react';
import styled from 'styled-components';
import Container from '../container';
import FromTheBlog from './from_the_blog';
import QuickLinks from './quick_links';
import LatestTweets from './latest_tweets';
import ContactUs from './contact_us';
import CopyRight from './copy_right';

const FooterWrapper = styled.footer`
  background-color: #303030;

  @media (max-width: 960px) {
    padding: 0 10px;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 40px 0;

  > div {
    width: 23%;
  }

  @media (max-width: 767px) {
    flex-direction: column;

    > div {
      width: 100%;
    }

    div + div {
      margin-top: 30px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <StyledContainer>
        <FromTheBlog />
        <QuickLinks />
        <LatestTweets />
        <ContactUs />
      </StyledContainer>
      <CopyRight />
    </FooterWrapper>
  );
}

export default Footer;