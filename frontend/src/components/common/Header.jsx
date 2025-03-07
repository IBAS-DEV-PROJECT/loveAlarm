import React from 'react';
import styled from 'styled-components';

// assets
import LogoImg from '../../assets/images/logo.png';

// styles
import { Img } from '../../styles/common/ImgStyle';
import FlexBox from '../../styles/common/FlexStyle';

const LogoWrapper = styled(FlexBox)`
  width: 48rem;
  height: fit-content;
  overflow: hidden;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.pink.light};
`;

const Header = () => {
  const handleOpenIbasWeb = () => {
    window.open('https://www.inhabas.com/', '_blank');
  };

  return (
    <LogoWrapper row="center">
      <Img src={LogoImg} width="17.375rem" height="5.75rem" onClick={handleOpenIbasWeb} />
    </LogoWrapper>
  );
};

export default Header;
