import React from 'react';
import styled from 'styled-components';

const ProgressContainer = styled.div`
  width: 80%;
  height: 10px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  margin: 10px 0;
`;

const ProgressFill = styled.div`
  width: ${({ width }) => width}%;
  height: 100%;
  background: ${({ theme }) => theme.colors.pink};
  border-radius: 4px;
  transition: width 0.3s ease-in-out;
`;

const ProgressBar = ({ current, total }) => {
  const progressPercentage = ((current + 1) / total) * 100;

  return (
    <ProgressContainer>
      <ProgressFill width={progressPercentage} />
    </ProgressContainer>
  );
};

export default ProgressBar;
