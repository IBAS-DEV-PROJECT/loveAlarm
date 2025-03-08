import React from 'react';
import styled from 'styled-components';
import { useAnswers } from '../../context/AnswersContext';

// styles
import { FlexBox } from '../../styles/common/FlexStyle';

const NavButtonContainer = styled(FlexBox)`
  width: 40.5rem;
`;

const Button = styled.button`
  width: 19.5rem;
  height: 3.5rem;
  font-size: ${({ theme }) => theme.fontSize.text.l};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.gray.dark};
  border-radius: 10px;
  background: ${({ disabled, isPrev, theme }) =>
    disabled ? theme.colors.white : isPrev ? '#D3D3D3' : theme.colors.pink.next};
  color: ${({ disabled, isPrev, theme }) =>
    disabled ? theme.colors.black : isPrev ? theme.colors.black : theme.colors.white};
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: ${({ disabled, isPrev, theme }) =>
      disabled ? theme.colors.white : isPrev ? '#D3D3D3' : theme.colors.pink.next};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const NavButtons = ({ currentIndex, setCurrentIndex, questions, answers }) => {
  const { setResult } = useAnswers();

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // 완료 버튼 클릭 시, API 호출
  const handleSubmit = async () => {
    // http://127.0.0.1:5000/api/submit

    try {
      const response = await fetch('http://127.0.0.1:5000/api/match', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(answers),
      });

      if (!response.ok) {
        throw new Error('Failed to submit answers');
      }

      const data = await response.json();
      setResult(data);

      console.log(data);
      alert(`테스트 완료!`);
    } catch (error) {
      alert('제출 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const isAnswerSelected =
    answers[questions[currentIndex].id] !== undefined && answers[questions[currentIndex].id] !== '';

  return (
    <NavButtonContainer row="between">
      <Button onClick={handlePrev} disabled={currentIndex === 0} isPrev={true}>
        이전
      </Button>
      <Button
        onClick={currentIndex < questions.length - 1 ? handleNext : handleSubmit}
        disabled={!isAnswerSelected}
      >
        {currentIndex < questions.length - 1 ? '다음' : '완료'}
      </Button>
    </NavButtonContainer>
  );
};

export default NavButtons;
