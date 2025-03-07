import React from 'react';
import styled from 'styled-components';

// styles
import FlexBox from '../../styles/common/FlexStyle';
import { SubTitle } from '../../styles/common/TextStyle';

const AnswerContainer = styled.div`
  display: ${({ count, questionId }) =>
    questionId === 2 ? 'flex' : count === 4 ? 'grid' : 'flex'};

  flex-direction: ${({ count, questionId }) =>
    questionId === 2 ? 'row' : count <= 3 ? 'column' : 'row'};

  grid-template-columns: ${({ count, questionId }) =>
    count === 4 && !(questionId === 2) ? '1fr 1fr' : 'none'};

  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const OptionButton = styled.button`
  background: ${({ selected, theme }) => (selected ? theme.colors.pink : '#f0f0f0')};
  color: ${({ selected, theme }) => (selected ? theme.colors.white : theme.colors.black)};
  border: 2px solid #d3d3d3;
  padding: 12px 16px;
  margin: 5px;
  cursor: pointer;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.desktop.lg};
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.pink};
    color: white;
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 30px 0 0 0;
  font-size: ${({ theme }) => theme.fontSize.desktop.sm};
  border: 2px solid #d3d3d3;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.pink};
  }
`;

const QuestionField = ({ question, answer, setAnswer }) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const filteredValue = inputValue.replace(/[^a-z0-9!@#$%^&*()_+=\-{}\[\]:;"'<>,.?/|\\`~]/g, '');
    setAnswer(filteredValue);
  };

  return (
    <FlexBox dir="col" col="center">
      <SubTitle>{question.question}</SubTitle>
      {question.type === 'text' ? (
        <InputField
          type="text"
          placeholder={question.placeholder}
          value={answer}
          onChange={handleInputChange}
        />
      ) : (
        <AnswerContainer count={question.options.length} questionId={question.id}>
          {question.options.map((option) => (
            <OptionButton
              key={option}
              selected={answer === option}
              onClick={() => setAnswer(option)}
            >
              {option}
            </OptionButton>
          ))}
        </AnswerContainer>
      )}
    </FlexBox>
  );
};

export default QuestionField;
