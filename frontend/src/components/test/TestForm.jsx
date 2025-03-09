import React, { useState } from 'react';
import styled from 'styled-components';

// data & context
import { questions } from '../../data/question';
import { useAnswers } from '../../context/AnswersContext';

// components
import Container from '../common/Container';
import Banner from '../common/Banner';
import TestField from './TestField';
import NavButtons from './NavButtons';

// styles
import { FlexBox } from '../../styles/common/FlexStyle';

const TestFieldContainer = styled(FlexBox)`
  width: 40.5rem;
  height: 24.25rem;
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: 10px;
`;

const TestForm = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { answers, setAnswers, result } = useAnswers();


  const handleAnswerChange = (answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questions[currentIndex].id]: answer,
    }));
  };

  return (
    <Container row="start">
      <Banner />

      <FlexBox dir="col" row="between" col="center" height="50%" margin="4.5rem">

        <TestFieldContainer dir="col" row="center" col="center">
          <TestField
            question={questions[currentIndex]}
            answer={answers[questions[currentIndex].id] || ''}
            setAnswer={handleAnswerChange}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            questions={questions}
          />
        </TestFieldContainer>

        <NavButtons
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          questions={questions}
          answers={answers}
        />

        {result && (
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <h2>매칭 결과</h2>
            <p>베스트 매치 이름: {result.best_match_name}</p>
            <p>베스트 점수: {result.best_score}</p>
            <p>유사도 목록: {JSON.stringify(result.all_similarities)}</p>
          </div>
        )}
      </FlexBox>
    </Container>
  );
};

export default TestForm;
