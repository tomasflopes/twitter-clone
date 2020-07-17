import React from 'react';

import Tweet from '../Tweet';

import { Container, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tweets>
        <Tweet image liked retweeted />
        <Tweet image liked />
        <Tweet image retweeted />
        <Tweet image />
        <Tweet image />
      </Tweets>
    </Container>
  );
};

export default Feed;
