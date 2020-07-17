import styled from 'styled-components';

import { Favorite } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  width: 100%;

  padding: 12px 26px;

  border-bottom: 1px solid var(--gray);
`;

export const FavIcon = styled(Favorite)`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  fill: var(--like);

  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  > span {
    margin-top: 12px;
  }
`;

export const Avatar = styled.div`
  width: 29px;
  height: 29px;
  border-radius: 50%;
  flex-shrink: 0;

  background: var(--gray);
  margin-bottom: 8px;
`;

export const Interaction = styled.div`
  display: flex;

  > strong {
    margin-right: 5px;
  }
`;
