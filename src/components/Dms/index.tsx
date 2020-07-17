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
  InfoIcon,
  PersonInfo,
  MessagesWrapper,
  TypeMessage,
  GalleryIcon,
  GifIconBox,
  GifIcon,
  MessageInputWrapper,
  MessageInput,
  EmojiIcon,
  SendIcon,
} from './styles';

import UserMessage from '../UserMessage';
import Message from '../Message';

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
          <UserMessage active />
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
          <InfoIcon />
        </MainContentHeader>

        <MessagesWrapper>
          <Message author='user' message='supz' />
          <Message author='other' message='supz' />
          <Message author='user' message='yo' />
          <Message author='other' message='yo' />
          <Message author='user' message='pauntz' />
          <Message author='other' message='pauntz' />
          <Message author='user' message='pauntz' />
          <Message author='other' message='pauntz' />
          <Message author='user' message='yo pauntz' />
          <Message author='other' message='pauntz' />
          <Message author='user' message='pauntz' />
          <Message author='other' message='pauntz' />
          <Message author='user' message='pauntz' />
          <Message author='other' message='pauntz' />
          <Message author='user' message='pauntz' />
          <Message author='other' message='pauntz' />
          <Message author='user' message='pauntz' />
          <Message author='other' message='pauntz' />
          <Message author='user' message='pauntz' />
          <Message author='other' message='pauntz' />
          <Message
            author='user'
            message='de facto a extinção dos elefantes é algo que me dá que pensar'
          />
          <Message author='other' message='pauntz' />
          <Message author='user' message='pauntz' />
          <Message author='other' message='és o goat' />
        </MessagesWrapper>

        <TypeMessage>
          <GalleryIcon />
          <GifIconBox>
            <GifIcon />
          </GifIconBox>
          <MessageInputWrapper>
            <MessageInput placeholder='Type your message' />
            <EmojiIcon />
          </MessageInputWrapper>
          <SendIcon />
        </TypeMessage>
      </MainContent>
    </Container>
  );
};

export default Dms;
