import React from 'react';
import { Title, SubTitle, Body, Caption } from '../../styles/common/TextStyle';

const StyledText = ({ type, children, ...props }) => {
  const TextComponent =
    {
      title: Title,
      subtitle: SubTitle,
      body: Body,
      caption: Caption,
    }[type] || Body; // 기본값은 Body

  return <TextComponent {...props}>{children}</TextComponent>;
};

export default StyledText;
