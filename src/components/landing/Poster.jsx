import React from 'react';
import styled from 'styled-components';

// components
import StyledText from '../common/StyledText';
import Target from './Target';

// styles
import FlexBox from '../../styles/common/FlexStyle';

const StyledPoster = styled(FlexBox)`
  /* border: 1px solid ${({ theme }) => theme.colors.gray.dark}; */
`;

const Poster = () => {
  return (
    <StyledPoster dir="col">
      <StyledText type="body">
        "당신의 데이터 속에 <br /> 당신의 이상형이 있습니다."
      </StyledText>
      <Target />
    </StyledPoster>
  );
};

export default Poster;
