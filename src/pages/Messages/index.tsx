import React from 'react';

import { Container, Wrapper } from './styles';

import MenuBar from '../../components/MenuBar';
import Dms from '../../components/Dms';

const Messages: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Dms />
      </Wrapper>
    </Container>
  );
};

export default Messages;
