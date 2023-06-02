import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import City from './City';
import Nav from './Nav'
import ContactApps from './ContactApps';
import Phone from './Phone'
import Account from './Account';

const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  white-space: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 20px;
  padding-left: 70px;
  padding-right: 70px;
`;

const Header = () => {
    return (
        <HeaderWrapper className='Header'>
            <Logo />
            <City />
            <Nav />
            <ContactApps />
            <Phone />
            <Account />
        </HeaderWrapper>
    );
};

export default Header;