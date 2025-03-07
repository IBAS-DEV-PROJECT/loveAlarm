import styled from 'styled-components';

export const StartButton = styled.button`
  width: 19.75rem;
  height: 4rem;
  font-size: ${({ theme }) => theme.fontSize.desktop.lg};
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

export const AnswerButton = styled.button`
  width: 19.5rem;
  height: 4rem;
  font-size: ${({ theme }) => theme.fontSize.desktop.lg};
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.black};
`;
