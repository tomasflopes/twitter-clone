import styled from 'styled-components';

import { Settings } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;

  flex-direction: column;
  background: var(--secondary);

  border-radius: 14px;
`;

export const Item = styled.div`
  padding: 0 16px;

  & + div {
    border-top: 1px solid var(--outline);
  }

  > div {
    padding: 5px 0;
  }

  &:first-child {
    padding-top: 13px;
  }

  &:last-child {
    padding-bottom: 5px;
  }
`;

export const Header = styled.div`
  display: flex;

  justify-content: space-between;
`;

export const SettingsIcon = styled(Settings)`
  width: 25px;
  height: 25px;

  fill: var(--twitter);
  cursor: pointer;

  &:hover {
    fill: var(--twitter-light-hover);
  }
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 19px;
`;
