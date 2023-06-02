import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
  color: #FF6633;
`;

const JobButton = () => {
    return (
        <StyledButton id="offfer-todo" href="*">Зарегистрируйтесь исполнителем</StyledButton>
    );
};

export default JobButton;