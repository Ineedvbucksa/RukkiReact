import React from 'react';
import styled from 'styled-components';

const StyledSecondForm = styled.form`
  display: flex;
  justify-items: left;
  justify-content: left;
  align-items: center;
  padding-left: 107px;
  color: #333333;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
`;

const ThirdInput = styled.input`
  box-sizing: border-box;
  padding: 10px;
  margin: 10px 10px;
  border: 1px solid #E5E5E5;
  border-radius: 10px;
  width: 140px;
  height: 48px;
`;

const FourthInput = styled.input`
  box-sizing: border-box;
  padding: 10px;
  margin: 10px 10px;
  border: 1px solid #E5E5E5;
  border-radius: 10px;
  width: 243px;
  height: 48px;
`;

const FifthInput = styled.input`
  box-sizing: border-box;
  padding: 10px;
  margin: 10px 10px;
  border: 1px solid #E5E5E5;
  border-radius: 10px;
  width: 140px;
  height: 48px;
`;

const Form2 = () => {
    return (
        <StyledSecondForm className="second-form" action="*" method="POST">
            <p>Заказ на</p>
            <ThirdInput id="third-input" className="form-item" type="text" name="spec-equipment" placeholder="24 октя|"/>
            <p>в</p>
            <FourthInput id="fourth-input" className="form-item" type="text" name="spec-equipment"
                   placeholder="укажите город, улицу и дом"/>
            <p>. Хочу уложиться в</p>
            <FifthInput id="fifth-input" className="form-item" type="text" name="spec-equipment" placeholder="5000 рублей"/>
        </StyledSecondForm>
    );
};

export default Form2;