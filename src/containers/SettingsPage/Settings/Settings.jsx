import React from 'react';
import { useDispatch } from 'react-redux';
import { Wrapper, Title, Content, ClearButton } from './style';
import ThemeHandler from '@/components/SettingsPage/ThemeHandler/ThemeHandler';
import { clearHistoryAction } from '@/store/reducers/historyReducer/historyReducer';

const Settings = () => {

   const dispatch = useDispatch()

   const clearHistoryHandler = () => {
      dispatch(clearHistoryAction())
   }

   return (
      <Wrapper>
         <Title>Your settings</Title>
         <Content>
            <ThemeHandler />
            <ClearButton type='button' onClick={() => clearHistoryHandler()} >Clear history</ClearButton>
         </Content>
      </Wrapper>
   );
}

export default Settings;