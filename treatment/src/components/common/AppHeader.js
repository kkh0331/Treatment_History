import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1c586;
  padding: 20px;
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
`;

const AppHeader = ({title}) => {
  return (
    <HeaderContainer>
        {title}
    </HeaderContainer>
  );
};

export default AppHeader;