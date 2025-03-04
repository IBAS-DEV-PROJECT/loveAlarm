import React from 'react';
import styled from 'styled-components';
import FlexBox from '../../styles/common/FlexStyle';

const StyledContainer = styled(FlexBox)`
  width: 1024px;
  height: 1080px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Container = ({ children, ...props }) => {
  return (
    <StyledContainer dir="col" row="between" col="center" {...props}>
      {children}
    </StyledContainer>
  );
};

export default Container;
