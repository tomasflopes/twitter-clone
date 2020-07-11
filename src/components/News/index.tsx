import React from 'react';

import { Container } from './styles';

interface Props {
  message: String;
}

const News: React.FC<Props> = ({ message }) => {
  return (
    <Container>
      <span>Assunto do momento em Portugal</span>
      <strong>{message}</strong>
      <p>
        {Math.round(Math.random() * 10 + 1)}.
        {Math.round(Math.random() * 1000 + 1)} Tweets
      </p>
    </Container>
  );
};

export default News;
