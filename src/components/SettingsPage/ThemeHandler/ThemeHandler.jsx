import React from 'react';
import { useDispatch } from 'react-redux';
import { changeThemeAction } from '@/store/reducers/themeReducer/themeReducer';
import { Container, Title, MySelect, OptionSelect } from './style';

const ThemeHandler = () => {

   const dispatch = useDispatch()

   const changeSelect = (elem) => {
      dispatch(changeThemeAction(elem))
   }

   return (
      <Container>
         <Title>Theme handler</Title>
         <MySelect name="theme" defaultValue={'light'} onChange={(e) => changeSelect(e.target.value)}>
            <OptionSelect value="light">Light</OptionSelect>
            <OptionSelect value="dark">Dark</OptionSelect>
         </MySelect>
      </Container>
   );
}

export default ThemeHandler;