import React from 'react';
import { HeaderWrapper, LogoTitle, ButtonContainer, LinkText } from './style';
import { Link } from 'react-router-dom';

const Header = () => {

   return (
      <HeaderWrapper>
         <LogoTitle>Calculator</LogoTitle>
         <ButtonContainer>
            <Link to={'/'}><LinkText>Main</LinkText></Link>
            <Link to={'/settings'}><LinkText>Settings</LinkText></Link>
         </ButtonContainer>
      </HeaderWrapper>
   );
}

export default Header;