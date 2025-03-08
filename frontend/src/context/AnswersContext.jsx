import React, { createContext, useContext, useState } from 'react';

// Context 생성
const AnswersContext = createContext();

// Provider 컴포넌트
export const AnswersProvider = ({ children }) => {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null); // API 응답 데이터

  return (
    <AnswersContext.Provider value={{ answers, setAnswers, result, setResult }}>
      {children}
    </AnswersContext.Provider>
  );
};

// Context를 쉽게 가져오는 훅
export const useAnswers = () => {
  const context = useContext(AnswersContext);
  if (!context) {
    throw new Error('useAnswers must be used within an AnswersProvider');
  }
  return context;
};
