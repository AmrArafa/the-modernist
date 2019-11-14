import React from 'react';
import FooterTitle from './footer_title';
import Tweet from './tweet';

const LatestTweets = () => {
  return (
    <div>
      <FooterTitle>Latest Tweets</FooterTitle>
      <Tweet />
      <Tweet />
    </div>
  );
}

export default LatestTweets;