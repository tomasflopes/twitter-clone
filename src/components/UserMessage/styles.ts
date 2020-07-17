import styled from 'styled-components';

interface Props {
  active: Boolean;
}

export const Container = styled.div<Props>`
  display: flex;

  padding: 15px 12px;

  border-bottom: 1px solid var(--gray);

  ${props => (props.active ? `border-right: 4px solid var(--twitter)` : null)};
`;

export const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;

  flex-shrink: 0;
  background: var(--gray);
  margin-right: 10px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;

  margin-top: 3px;

  flex-direction: column;

  font-size: 16px;
`;

export const Information = styled.div`
  display: flex;

  align-items: flex-start;
  justify-content: space-between;
`;

export const UserInfo = styled.div`
  > strong {
    color: var(--white);
    margin-right: 5px;
  }

  span {
    color: var(--gray);
  }
`;

export const Message = styled.span`
  color: var(--gray);
`;

export const Timestamp = styled.span`
  color: var(--gray);
`;
