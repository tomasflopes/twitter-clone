import React from 'react';

import { Container, Item, Header, Title, SettingsIcon } from './styles';

interface Props {
  title: string;
  elements: React.ReactNode[];
  editable?: boolean;
}

const List: React.FC<Props> = ({ title, elements, editable }) => {
  return (
    <Container>
      <div>
        <Item>
          <Header>
            <Title>{title}</Title>
            {editable ? <SettingsIcon /> : null}
          </Header>

          {elements.map((element, index) => (
            <Item key={index}>{element}</Item>
          ))}
        </Item>
      </div>
    </Container>
  );
};

export default List;
