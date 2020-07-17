import React from 'react';

import { Container, FavIcon, Info, Avatar, Interaction } from './styles';

const Notification: React.FC = () => {
  return (
    <Container>
      <FavIcon />
      <Info>
        <Avatar />
        <Interaction>
          <strong>2+</strong>
          <span>curtir seu Tweet</span>
        </Interaction>
        <span>https://pic.twitter.com/NtggbyEE7e</span>
      </Info>
    </Container>
  );
};

export default Notification;
