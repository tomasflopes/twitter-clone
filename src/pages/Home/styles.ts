import styled, { css } from 'styled-components';

import { Gallery, Gif, Emoji, Star, Stats, Calendar } from '../../styles/Icons';

export const Container = styled.div`
  background: var(--primary);
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const TweetArea = styled.div`
  display: flex;

  flex-direction: column;

  border-bottom: 10px solid var(--secondary);
`;

export const Header = styled.div`
  display: flex;

  height: 50px;
  border-bottom: 1px solid var(--gray);
  align-items: center;
  justify-content: space-between;

  padding: 0 8px;

  > h1 {
    font-size: 20px;
  }
`;

const iconCSS = css`
  width: 23px;
  height: 23px;
  flex-shrink: 0;
  cursor: pointer;

  fill: var(--twitter);
`;

export const StarIcon = styled(Star)`
  ${iconCSS}
`;

export const TweetWrapper = styled.div`
  display: flex;

  padding: 12px;
`;

export const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  flex-shrink: 0;

  margin-top: 5px;

  background: var(--gray);
`;

export const TweetInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FinalLine = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 35%;
  }
`;

export const TweetInput = styled.input`
  &::placeholder {
    font-size: 18px;
    color: var(--gray);
  }

  padding: 20px 30px 30px 10px;
`;

export const GalleryIcon = styled(Gallery)`
  ${iconCSS}
`;

export const GifContainer = styled.div`
  border: 1px solid var(--twitter);
  border-radius: 4px;
`;

export const GifIcon = styled(Gif)`
  ${iconCSS}
`;

export const StatsIcon = styled(Stats)`
  ${iconCSS}
`;

export const EmojiIcon = styled(Emoji)`
  ${iconCSS}
`;

export const ScheduleIcon = styled(Calendar)`
  ${iconCSS}
`;

export const TweetButton = styled.button`
  border-radius: 20px;
  padding: 10px 15px;

  background: var(--twitter);
`;
