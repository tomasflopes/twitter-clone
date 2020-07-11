import React from 'react';

import { Container, Avatar, UserInfo, FollowButton } from './styles';

interface Props {
  name: String;
  nickname: String;
}

const FollowSuggestion: React.FC<Props> = ({ name, nickname }) => {
  return (
    <Container>
      <div>
        <Avatar />
        <UserInfo>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </UserInfo>
      </div>

      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
