import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;
