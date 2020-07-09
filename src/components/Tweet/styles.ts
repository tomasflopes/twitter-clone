import styled from 'styled-components';

import { Chat, Favorite, Retweet } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;

  border-bottom: 1px solid var(--outline);

  max-width: 100%;
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  color: var(--gray);
`;

export const RetweetIcon = styled(Retweet)`
  display: flex;
  align-items: center;
  height: 18px;
  width: 19px;

  color: var(--gray);
`;

export const Body = styled.div``;

export const Avatar = styled.div``;

export const Content = styled.div``;

export const Header = styled.div`
  display: flex;

  width: 240px;
  justify-content: space-around;

  > span {
    color: var(--gray);
  }

  > time {
    color: var(--gray);
  }
`;

export const Dot = styled.div``;

export const Description = styled.div``;

export const ImageContent = styled.div``;

export const Icons = styled.div``;

export const Status = styled.div``;

export const CommentIcon = styled(Chat)`
  height: 15px;
  width: 15px;
`;

export const LikeIcon = styled(Favorite)`
  height: 15px;
  width: 15px;
`;
