import React from 'react';
import styled from 'styled-components';
import StyledLink from '../styled_link';

const TweetWrapper = styled.p`
  font-size: 13px;
  color: #979797;
  margin: 0;

  span:first-child {
    margin-right: 5px;
  }

  span:last-child {
    display: block;
  }

  + p {
    margin-top: 20px;
  }
`;

const Tweet = () => {
  return (
    <TweetWrapper>
      <span>
        <StyledLink href="#!">@namehere</StyledLink>
      </span>
      Justoid nonummy laoreet phasellent penatoque in antesque pellus elis eget tincidunt. Nequatdui laorem justo a non tellus laoremut vitae doloreet
      <span>1 day ago</span>
    </TweetWrapper>
  );
}

export default Tweet;