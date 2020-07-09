import React from 'react';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder='Procurar no Twitter' />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          labore nesciunt quas iusto vitae numquam ipsum doloremque magnam
          consequatur, totam alias aspernatur nihil fugiat. Expedita ducimus
          consequatur soluta ad. Alias!
        </p>
      </Body>
    </Container>
  );
};

export default SideBar;
