import styled from 'styled-components';

import { Settings } from '../../styles/Icons';

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

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px 12px;

  > h1 {
    font-size: 19px;
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  cursor: pointer;

  fill: var(--twitter);
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Tab = styled.div`
  flex: 1;
  margin-top: 10px;
  padding: 11px 2px 15px;
  font-weight: bold;
  text-align: center;

  font-size: 15px;

  outline: 0;

  cursor: pointer;

  &:hover {
    background: var(--twitter-dark-hover);
    color: var(--twitter);
  }

  &.active {
    color: var(--twitter);
    border-bottom: 2px solid var(--twitter);
  }
`;
