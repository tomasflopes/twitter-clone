import React from 'react';
import StickyBox from 'react-sticky-box';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

import List from '../List';
import News from '../News';
import FollowSuggestion from '../FollowSuggestion';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder='Procurar no Twitter' />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            editable
            title='Assuntos para você'
            elements={[
              <News message={'Cenas que acontecem no mundo'} />,
              <News message={'Cenas que acontecem no mundo'} />,
              <News message={'Cenas que acontecem no mundo'} />,
              <News message={'Cenas que acontecem no mundo'} />,
              <News message={'Cenas que acontecem no mundo'} />,
              <News message={'Cenas que acontecem no mundo'} />,
              <News message={'Cenas que acontecem no mundo'} />,
            ]}
          />

          <List
            title='Quem seguir'
            elements={[
              <FollowSuggestion name='2+' nickname='@tomas050302' />,
              <FollowSuggestion name='2+' nickname='@tomas050302' />,
              <FollowSuggestion name='2+' nickname='@tomas050302' />,
              <FollowSuggestion name='2+' nickname='@tomas050302' />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
