import React from 'react';
import styled from 'styled-components';

const StyledQuestion = styled.p`
  color: #222222;
`;


const JobQuestion = () => {
    return (
        <StyledQuestion id="question">Нужна работа?</StyledQuestion>
    );
};

export default JobQuestion;