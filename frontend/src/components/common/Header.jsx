import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAnswers } from '../../context/AnswersContext';

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
  const location = useLocation();
  const navigate = useNavigate();

  const { answers, result } = useAnswers();

  const handleClickLogoButton = async () => {
    if (location.pathname === '/result') {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/update', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            best_match_name: result.best_match_name,
          }),
        });

        if (!response.ok) {
          throw new Error('DB 업데이트 실패');
        }

        console.log('DB 업데이트 성공');
        navigate('/');
      } catch (error) {
        console.error('서버 오류:', error);
        alert('서버 오류 발생! 다시 시도해주세요.');
      }
    } else {
      window.open('https://www.inhabas.com/', '_blank');
    }
  };

  return (
    <LogoWrapper row="center">
      <Img src={LogoImg} width="17.375rem" height="5.75rem" onClick={handleClickLogoButton} />
    </LogoWrapper>
  );
};

export default Header;
