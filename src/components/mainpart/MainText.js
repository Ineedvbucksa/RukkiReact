import React from 'react';
import styled from 'styled-components';

const StyledMainText = styled.h1`
  display: flex;
  justify-content: left;
  padding-top: 100px;
  padding-left: 107px;
  font-weight: 900;
  font-size: 72px;
`;


const MainText = () => {
    return (
        <StyledMainText className="MainText">
            Rukki Pro - сервис поиска <br />
            и заказа спецтехники
        </StyledMainText>
    );
};

export default MainText;