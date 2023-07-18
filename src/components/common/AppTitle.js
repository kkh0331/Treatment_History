import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.h1`
  color: #ff971e;
  font-size: 72px;
`;

const AppTitle = ({title}) => {
  return (
    <TitleStyle>{title}</TitleStyle>
  );
};

export default AppTitle;