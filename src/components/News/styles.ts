import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 14px;

  > span {
    color: var(--gray);

    margin-bottom: 3px;
  }

  > p {
    color: var(--gray);
    margin-top: 8px;
    margin-left: 1px;
  }
`;
