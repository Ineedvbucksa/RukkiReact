import React from 'react';
import styled from 'styled-components';

const StyledNavItem = styled.a`
  color: #333333;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  line-height: 51px;
  padding-right: 30px;
`;

const Nav = () => {
    return (
        <nav className="header-nav">
            <StyledNavItem className="nav-item" href="*">Приложение</StyledNavItem>
            <StyledNavItem className="nav-item" href="*">O компании</StyledNavItem>
            <StyledNavItem className="nav-item" href="*">Исполнителям</StyledNavItem>
            <StyledNavItem className="nav-item" href="*">Контакты</StyledNavItem>
        </nav>
    );
};

export default Nav;