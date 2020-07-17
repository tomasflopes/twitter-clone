import React from 'react';

import Tweet from '../Tweet';

import { Container, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tweets>
        <Tweet liked retweeted />
        <Tweet liked />
        <Tweet retweeted />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
};

export default Feed;
