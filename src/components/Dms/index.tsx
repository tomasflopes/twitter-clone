import React from 'react';

import {
  Container,
  People,
  Content,
  Header,
  AddMessageIcon,
  MessagesRequest,
  ArrowIcon,
  SearchWrapper,
  SearchIcon,
  SearchInput,
  MainContent,
  MainContentHeader,
  InfoIconWrapper,
  InfoIcon,
  PersonInfo,
  MessagesWrapper,
  Message,
} from './styles';

import UserMessage from '../UserMessage';

const Dms: React.FC = () => {
  return (
    <Container>
      <People>
        <Header>
          <strong>Messages</strong>
          <AddMessageIcon />
        </Header>
        <Content>
          <MessagesRequest>
            <span>Messages Requests</span>
            <ArrowIcon />
          </MessagesRequest>
          <SearchWrapper>
            <SearchIcon />
            <SearchInput placeholder='Search for people and groups' />
          </SearchWrapper>
          <UserMessage />
          <UserMessage />
          <UserMessage />
          <UserMessage />
          <UserMessage />
          <UserMessage />
          <UserMessage />
          <UserMessage />
          <UserMessage />
          <UserMessage />
          <UserMessage />
        </Content>
      </People>

      <MainContent>
        <MainContentHeader>
          <PersonInfo>
            <strong>2+</strong>
            <span>@tomas050302</span>
          </PersonInfo>
          <InfoIconWrapper>
            <InfoIcon />
          </InfoIconWrapper>
        </MainContentHeader>
        <MessagesWrapper>
          <Message />
          <Message />
          <Message />
          <Message />
        </MessagesWrapper>
      </MainContent>
    </Container>
  );
};

export default Dms;
