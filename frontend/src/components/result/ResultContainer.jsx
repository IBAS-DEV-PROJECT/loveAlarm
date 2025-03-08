import React, { useState } from 'react';
import { useAnswers } from '../../context/AnswersContext';

// components
import Container from '../common/Container';
import Banner from '../common/Banner';
import ResultPoster from './ResultPoster';
import Button from '../common/Button';

const ResultContainer = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { result } = useAnswers();

  let score = result ? result.best_score : '???';

  return (
    <Container row="between" padding="0 0 2.25rem 0">
      <Banner />
      <ResultPoster score={score} />
      <Button type="result" isClicked={isClicked} onClick={() => setIsClicked(true)}>
        {result ? result.best_match_name : '결과 확인'}
      </Button>
    </Container>
  );
};

export default ResultContainer;
