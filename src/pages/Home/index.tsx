import React from 'react';

import MenuBar from '../../components/MenuBar';
import SideBar from '../../components/SideBar';
import Feed from '../../components/Feed';

import {
  Container,
  Wrapper,
  FeedWrapper,
  TweetArea,
  Header,
  StarIcon,
  TweetWrapper,
  Avatar,
  TweetInputWrapper,
  TweetInput,
  FinalLine,
  GalleryIcon,
  GifContainer,
  GifIcon,
  StatsIcon,
  EmojiIcon,
  ScheduleIcon,
  TweetButton,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <FeedWrapper>
          <TweetArea>
            <Header>
              <h1>Página Inicial</h1>
              <StarIcon />
            </Header>
            <TweetWrapper>
              <Avatar />
              <TweetInputWrapper>
                <TweetInput placeholder='O que está acontecendo?' />
                <FinalLine>
                  <div>
                    <GalleryIcon />
                    <GifContainer>
                      <GifIcon />
                    </GifContainer>
                    <StatsIcon />
                    <EmojiIcon />
                    <ScheduleIcon />
                  </div>
                  <TweetButton>Tweetar</TweetButton>
                </FinalLine>
              </TweetInputWrapper>
            </TweetWrapper>
          </TweetArea>
          <Feed />
        </FeedWrapper>
        <SideBar />
      </Wrapper>
    </Container>
  );
};

export default Home;
