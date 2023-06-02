import React from 'react';
import styled from 'styled-components';

const StyledSubmitButton = styled.a`
  color: white;
  width: 296px;
  height: 56px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: #FF6633;
  border-radius: 10px;
  margin-left: 108px;
  margin-top: 50px;
`;

const Submit = () => {
    return (
        <div className="submit">
            <StyledSubmitButton href="*" id="submit">Заказать</StyledSubmitButton>
        </div>
    );
};

export default Submit;