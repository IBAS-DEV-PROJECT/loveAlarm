import React from 'react';
import styled from 'styled-components';

// asssets
import Heart from '../../assets/images/heart.png';

// styles
import { Img } from '../../styles/common/ImgStyle';

const TargetWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.div`
  position: absolute;
  border: 3px solid ${({ theme }) => theme.colors.pink};
  border-radius: 50%;
`;

const InnerCircle = styled(Circle)`
  width: 40px;
  height: 40px;
`;

const MiddleCircle = styled(Circle)`
  width: 80px;
  height: 80px;
`;

const OuterCircle = styled(Circle)`
  width: 120px;
  height: 120px;
`;

const LargestCircle = styled(Circle)`
  width: 160px;
  height: 160px;
`;

const Target = () => {
  return (
    <TargetWrapper>
      <LargestCircle />
      <OuterCircle />
      <MiddleCircle />
      <InnerCircle />
      <Img src={Heart} width="30px" height="30px" />
    </TargetWrapper>
  );
};

export default Target;
