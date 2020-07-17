import styled from 'styled-components';

interface Props {
  author: String;
}

export const Container = styled.div<Props>`
  display: flex;
  align-self: ${props => (props.author === 'user' ? `flex-end` : `flex-start`)};
`;

export const MessageWrapper = styled.span<Props>`
  display: flex;
  height: 35px;

  align-items: center;
  justify-content: center;
  background: ${props =>
    props.author === 'user' ? `var(--twitter)` : `var(--secondary)`};
  padding: 12px 10px;

  border-radius: ${props =>
    props.author === 'user' ? `25px 25px 0 25px` : `0 20px 20px 20px`};

  > span {
    font-size: 14px;
    color: var(--white);
  }

  margin-bottom: 15px;
`;

export const Avatar = styled.div`
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 50%;

  background: var(--gray);
  margin-right: 8px;
`;
