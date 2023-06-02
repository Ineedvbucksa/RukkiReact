import React from 'react';
import styled from 'styled-components';

const AccountWrapper = styled.section`
  font-weight: 600;
  font-size: 18px;
  line-height: 51px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 2px;
`;

const StyledLogin = styled.a`
  color: #333333;
  text-decoration: none;
  padding-right: 30px;
`;

const StyledReg = styled.a`
  color: #333333;
  width: 150px;
  height: 48px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: white;
  border-radius: 10px;
`;

const Account = () => {
    return (
        <AccountWrapper className="account">
            <StyledLogin href="*" id="login">Войти</StyledLogin>
            <StyledReg href="*" id="reg">Регистрация</StyledReg>
        </AccountWrapper>
    );
};

export default Account;