import React from 'react';
import styled from 'styled-components';

// assets
import BannerImg from '../../assets/images/banner.png';

// components
import Container from '../common/Container';
import Header from '../common/Header';
import Poster from './Poster';
import Button from '../common/Button';

// styles
import { Img } from '../../styles/common/ImgStyle';
import FlexBox from '../../styles/common/FlexStyle';
import StyledText from '../common/StyledText';

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  padding: 0 0 0 3rem;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
`;

const LandingContainer = () => {
  const handleStart = () => {
    console.log('시작하기 클릭!');
  };

  return (
    <Container>
      <div>
        <Header />
        <Img
          src={BannerImg}
          width="1024px"
          border="1px solid ${({ theme }) => theme.colors.gray.light}"
        />
      </div>
      <FlexBox width="100%">
        <Left>
          <Poster />
        </Left>
        <Center>
          <StyledText type="title">
            좋아하면 <br /> 울리는
          </StyledText>
        </Center>
        <Right />
      </FlexBox>
      <FlexBox dir="col" row="between" col="center" height="14.5rem" padding="0 0 7rem 0">
        <FlexBox width="22.75rem" row="between">
          <StyledText type="caption">#여사친 / 남사친</StyledText>
          <StyledText type="caption">#CC</StyledText>
          <StyledText type="caption">#로맨틱</StyledText>
          <StyledText type="caption">#성공적</StyledText>
        </FlexBox>
        <Button type="start">나랑 가까운 사람 찾으러 가기</Button>
      </FlexBox>
    </Container>
  );
};

export default LandingContainer;
