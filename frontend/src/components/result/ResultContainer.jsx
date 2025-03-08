import React, { useState } from 'react';

// components
import Container from '../common/Container';
import Banner from '../common/Banner';
import ResultPoster from './ResultPoster';
import Button from '../common/Button';

const Result = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Container row="between" padding="0 0 2.25rem 0">
      <Banner />
      <ResultPoster />
      <Button type="result" isClicked={isClicked} onClick={() => setIsClicked(true)}>
        아이디 출력
      </Button>
    </Container>
  );
};

export default Result;
