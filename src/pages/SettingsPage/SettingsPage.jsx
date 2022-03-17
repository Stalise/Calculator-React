import React from 'react';
import { Wrapper } from './style';
import Header from '@/components/Common/Header/Header';
import Settings from '@/containers/SettingsPage/Settings/Settings';

const SettingsPage = () => {

   return (
      <Wrapper>
         <Header />
         <Settings />
      </Wrapper>
   );
}

export default SettingsPage;