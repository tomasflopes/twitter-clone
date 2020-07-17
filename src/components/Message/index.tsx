import React from 'react';

import { Container, MessageWrapper, Avatar } from './styles';

interface Props {
  author: String;
  message: String;
}

const Message: React.FC<Props> = ({ author, message }) => {
  return (
    <Container author={author}>
      {author !== 'user' ? <Avatar /> : null}
      <MessageWrapper author={author}>
        <span>{message}</span>
      </MessageWrapper>
    </Container>
  );
};

export default Message;
