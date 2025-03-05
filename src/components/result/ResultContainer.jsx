import React from 'react';
import styled from 'styled-components';

// assets
import HeartImg from '../../assets/images/heart.png';

// components
import Container from '../common/Container';
import Header from '../common/Header';

// styles
import { Body } from '../../styles/common/TextStyle';
import FlexBox from '../../styles/common/FlexStyle';
import { Img } from '../../styles/common/ImgStyle';

const IdContainer = styled(FlexBox)`
  width: 248px;
  padding: 12px;
  background-color: white;
  border: 2px solid #cccccc;
  border-radius: 8px;
`;

// 알림 카드 스타일
const NotificationCard = styled(FlexBox)`
  gap: 10px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 20px;
  width: 320px;
  font-size: 14px;
`;

// 배경 원 스타일
const CircleContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 400px;
  background: #00bcd4;
  border-radius: 20px;
  overflow: hidden;
`;

const Circle = styled.div`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
`;

const Result = () => {
  return (
    <Container row="between">
      <FlexBox dir="col" row="between" col="center" height="22%">
        <Header />
        <IdContainer row="center">
          <Body>인스타 아이디 받아오기</Body>
        </IdContainer>
      </FlexBox>

      <FlexBox dir="col" row="between" col="center" height="48%">
        <NotificationCard dir="col" row="center" col="center">
          <FlexBox row="between" col="center" width="35%">
            <Img width="24px" height="24px" src={HeartImg} />
            <Body>LoveAlarm</Body>
          </FlexBox>

          <div>
            <p>
              누군가 당신의 종알람을 울렸습니다. <br />
              종알람에서 확인하세요.
            </p>
          </div>
        </NotificationCard>

        <CircleContainer>
          <Circle size={250} />
          <Circle size={180} />
          <Circle size={100} />

          <Img width="42px" height="42px" src={HeartImg} />
        </CircleContainer>
      </FlexBox>

      <FlexBox dir="col" row="between" col="center" height="15%"></FlexBox>
    </Container>
  );
};

export default Result;
