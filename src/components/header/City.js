import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  color: #333333;
  font-weight: 600;
  font-size: 18px;
  line-height: 51px;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  outline: none;
  padding-right: 125px;
`;

const City = () => {
    return (
        <div className = "city">
            <form>
                <StyledSelect id="city-form">
                    <option value="Moscow" className="nav-item" id="city">Москва</option>
                </StyledSelect>
            </form>
        </div>
    );
};

export default City;