import styled from 'styled-components';

// 제목용 텍스트
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.desktop.xxxl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;

// 부제목용 텍스트
export const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.desktop.xxl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;

// 본문 텍스트
export const Body = styled.p`
  font-size: ${({ theme }) => theme.fontSize.desktop.sm};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
`;

// 작은 텍스트 (부가 설명 등)
export const Caption = styled.span`
  font-size: ${({ theme }) => theme.fontSize.desktop.sm};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray.dark};
`;
