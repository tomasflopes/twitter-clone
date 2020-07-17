import React from 'react';

import {
  Container,
  Avatar,
  Content,
  Information,
  UserInfo,
  Message,
  Timestamp,
} from './styles';

interface Props {
  active?: Boolean;
}

const UserMessage: React.FC<Props> = ({ active }) => {
  return (
    <Container active={active || false}>
      <Avatar />
      <Content>
        <Information>
          <UserInfo>
            <strong>2+</strong>
            <span>@tomas050302</span>
          </UserInfo>
          <Timestamp>7 h</Timestamp>
        </Information>
        <Message>és o goat</Message>
      </Content>
    </Container>
  );
};

export default UserMessage;
