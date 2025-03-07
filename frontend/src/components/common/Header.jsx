import React from 'react';
import styled from 'styled-components';

// assets
import LogoImg from '../../assets/images/logo.png';

// styles
import { Img } from '../../styles/common/ImgStyle';
import FlexBox from '../../styles/common/FlexStyle';

const LogoWrapper = styled(FlexBox)`
  width: 1024px;
  height: fit-content;
  overflow: hidden;
  cursor: pointer;
`;

const Header = () => {
  const handleOpenIbasWeb = () => {
    window.open('https://www.inhabas.com/', '_blank');
  };

  return (
    <LogoWrapper row="center">
      <Img src={LogoImg} height="124px" onClick={handleOpenIbasWeb} />
    </LogoWrapper>
  );
};

export default Header;
