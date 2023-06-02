import React from 'react';
import styled from 'styled-components';

const StyledAppSection = styled.section`
  display: flex;
`;

const StyledAppLink = styled.a`
  width: 50px;
  height: 50px;
  border: 1px solid #E5E5E5;
  border-radius: 50%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 2px;
`;

const ContactApps = () => {
    return (
        <StyledAppSection className="contact-apps">
            <StyledAppLink href="*" className="app-link">
                <img src='./HeaderImages/whatsapp.svg' className="app-image"/>
            </StyledAppLink>
            <StyledAppLink href="*" className="app-link">
                <img src='./HeaderImages/viber.svg' className="app-image"/>
            </StyledAppLink>
            <StyledAppLink href="*" className="app-link">
                <img src='./HeaderImages/telegram.svg' className="app-image"/>
            </StyledAppLink>
        </StyledAppSection>
    );
};

export default ContactApps;