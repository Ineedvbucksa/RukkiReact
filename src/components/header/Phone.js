import React from 'react';
import styled from 'styled-components';

const StyledPhone = styled.a`
  text-decoration: none;
  color: #333333;
  font-size: 18px;
  font-weight: 600;
  line-height: 51px;
`;

const Phone = () => {
    return (
        <section className="phone-number">
            <StyledPhone href="*" id="number">
                +7 499 226 09 04
            </StyledPhone>
        </section>
    );
};

export default Phone;