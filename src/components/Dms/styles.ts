import styled, { css } from 'styled-components';

import {
  MessageAdd,
  InfoCircle,
  ChevronRight,
  Search,
  Gallery,
  Gif,
  PaperPlane,
  Emoji,
} from '../../styles/Icons';

export const Container = styled.div`
  display: flex;

  width: min(1015px, max(80%, 640px));

  height: 100vh;

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const People = styled.div`
  display: none;

  @media (min-width: 920px) {
    display: flex;
    flex-direction: column;

    flex: 3;
  }
`;

export const Content = styled.div`
  overflow-y: scroll;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px 10px;

  border-bottom: 1px solid var(--gray);
  border-right: 1px solid var(--gray);

  > strong {
    font-size: 18px;
  }
`;

const iconCSS = css`
  width: 22px;
  height: 22px;
  flex-shrink: 0;
`;

export const AddMessageIcon = styled(MessageAdd)`
  ${iconCSS}
`;

export const MessagesRequest = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px 10px;

  border-bottom: 1px solid var(--gray);
`;

export const ArrowIcon = styled(ChevronRight)`
  width: 30px;
  height: 30px;

  fill: var(--gray);
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  padding: 12px 10px;

  border-bottom: 1px solid var(--gray);
`;

export const SearchIcon = styled(Search)`
  width: 20px;
  height: 20px;
  flex-shrink: 0;

  position: absolute;
  left: 30px;

  > svg {
    color: var(--gray);
  }
`;

export const SearchInput = styled.input`
  background: var(--secondary);
  width: 100%;

  border-radius: 15px;

  padding: 12px 50px;

  &::placeholder {
    font-size: 15px;

    color: var(--gray);
  }
`;

export const MainContent = styled.div`
  flex: 6;

  display: flex;
  flex-direction: column;
`;

export const MainContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 9px 18px;

  border-bottom: 1px solid var(--gray);

  > strong {
    font-size: 18px;
  }
`;

export const PersonInfo = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 17px;
    color: var(--white);
  }

  > span {
    font-size: 14px;
    color: var(--gray);
  }
`;

export const InfoIcon = styled(InfoCircle)`
  ${iconCSS}
  fill: var(--twitter);

  cursor: pointer;
`;

export const MessagesWrapper = styled.div`
  height: calc(100% - 55px);
  padding: 0 8px 15px 10px;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;
`;

export const TypeMessage = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;

  border-top: 1px solid var(--gray);

  align-items: center;
  justify-content: space-around;
  height: 50px;

  padding: 8px;
`;

const sendMessageIconsCSS = css`
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  fill: var(--twitter);

  cursor: pointer;
`;

export const GalleryIcon = styled(Gallery)`
  ${sendMessageIconsCSS}
`;

export const GifIconBox = styled.div`
  border: 1.5px solid var(--twitter);
  border-radius: 5px;
`;

export const GifIcon = styled(Gif)`
  ${sendMessageIconsCSS}
`;

export const MessageInputWrapper = styled.div`
  display: flex;
  position: relative;

  align-items: center;
  width: 80%;
  height: 100%;
`;

export const MessageInput = styled.input`
  background: var(--secondary);
  width: 100%;
  height: 100%;

  &::placeholder {
    font-size: 15px;
    color: var(--white);
  }

  padding: 5px 12px;
  border-radius: 25px;
  outline: 0;

  &:focus {
    border: 1px solid var(--twitter);
  }
`;

export const EmojiIcon = styled(Emoji)`
  ${sendMessageIconsCSS}
  position: absolute;
  right: 10px;
`;

export const SendIcon = styled(PaperPlane)`
  ${sendMessageIconsCSS}
`;
