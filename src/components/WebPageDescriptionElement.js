import React from 'react';
import styled from 'styled-components';

const TitleStyle2 = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const DescriptionStyle = styled.div`
  font-size: 20px;
  color: gray;
`;

const NextDivStyle = styled.div`
  padding : 15px;
  width: 800px;
  text-align:left;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  margin : 10px auto;
  &:hover{
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }
`;

const WebPageDescriptionElement = ({title, description, method}) => {

    return (
        <NextDivStyle>
            <TitleStyle2>{title}</TitleStyle2>
            <DescriptionStyle style={{marginBottom:"10px"}}>{'\u2192'} {description}</DescriptionStyle>
            <DescriptionStyle>Method : {method}</DescriptionStyle>
        </NextDivStyle>
    );
};

export default WebPageDescriptionElement;