import React from 'react';
import { StartButton, AnswerButton } from '../../styles/common/ButtonStyle';

const Button = ({ type, children, ...props }) => {
  const ButtonComponent =
    {
      start: StartButton,
      answer: AnswerButton,
    }[type] || StartButton; // 기본값은 StartButton

  return <ButtonComponent {...props}>{children}</ButtonComponent>;
};

export default Button;
