import React from 'react';
import JobQuestion from "./JobQuestion";
import JobButton from "./JobButton";
import styled from 'styled-components';

const StyledJobVacancy = styled.div`
  display: flex;
  justify-items: left;
  justify-content: left;
  align-items: center;
  padding-top: 30px;
  padding-left: 107px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;

const JobVacancy = () => {
    return (
        <StyledJobVacancy className="job-vacancy">
            <JobQuestion />
            <JobButton />
        </StyledJobVacancy>
    );
};

export default JobVacancy;