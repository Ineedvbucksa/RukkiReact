import React from 'react';
import styled from 'styled-components';

const StyledFirstForm = styled.form`
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

const FirstInput = styled.input`
  box-sizing: border-box;
  margin: 10px 10px;
  border: 1px solid #E5E5E5;
  border-radius: 10px;
  width: 300px;
  height: 48px;
  padding: 0px 0px 0px 40px;
  background: url('./SecondPartImages/shape.svg') no-repeat center left;
  background-size: auto 50%;
`;

const SecondInput = styled.input`
  box-sizing: border-box;
  margin: 10px 10px;
  border: 1px solid #E5E5E5;
  border-radius: 10px;
  width: 300px;
  height: 48px;
  padding: 0px 0px 0px 40px;
`;

const Form1 = () => {
    return (
        <StyledFirstForm className="first-form" action="*" method="POST">
            <p>Я хочу заказать</p>
            <FirstInput id="first-input" className="form-item" type="text" name="spec-equipment"
                   placeholder="Какой вид спецтехники вам нужен?"/>
            <p>, чтобы</p>
            <SecondInput id="second-input" className="form-item" type="text" name="spec-equipment"
                   placeholder="Выкопать яму для бассейна"/>
        </StyledFirstForm>
    );
};

export default Form1;