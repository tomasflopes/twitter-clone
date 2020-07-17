import React from 'react';

import {
  Container,
  Retweeted,
  RetweetedIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

import DmIcon from '../../assets/DmIcon';
interface Props {
  liked?: boolean;
  retweeted?: boolean;
  image?: boolean;
}

const Tweet: React.FC<Props> = ({ liked, retweeted, image }) => {
  return (
    <Container>
      {retweeted ? (
        <Retweeted>
          <RetweetedIcon />
          Você retweetou
        </Retweeted>
      ) : null}

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>2+</strong>
            <span>@tomas050302</span>
            <Dot />
            <time>09 de jun</time>
          </Header>

          <Description>Sup yo</Description>

          {image ? <ImageContent /> : null}

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>

            <Status retweeted={retweeted}>
              <RetweetIcon />
              200
            </Status>

            <Status liked={liked}>
              <LikeIcon />
              861
            </Status>

            <Status>
              <DmIcon />
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
