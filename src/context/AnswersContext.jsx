import React, { createContext, useContext, useState } from 'react';

// Context 생성
const AnswersContext = createContext();

// Provider 컴포넌트
export const AnswersProvider = ({ children }) => {
  const [answers, setAnswers] = useState({});

  return (
    <AnswersContext.Provider value={{ answers, setAnswers }}>{children}</AnswersContext.Provider>
  );
};

// Context를 쉽게 가져오는 훅
export const useAnswers = () => {
  return useContext(AnswersContext);
};
