import React from 'react';
import { Wrapper, Title, Content, ClearButton } from './style';
import ThemeHandler from '@/components/SettingsPage/ThemeHandler/ThemeHandler';

const Settings = () => {

   return (
      <Wrapper>
         <Title>Your settings</Title>
         <Content>
            <ThemeHandler />
            <ClearButton type='button'>Clear history</ClearButton>
         </Content>
      </Wrapper>
   );
}

export default Settings;