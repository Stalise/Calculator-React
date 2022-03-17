import React from 'react';
import { KeypadContainer } from './style';
import KeypadButton from '../KeypadButton/KeypadButton';
import { calculatorButtons } from '@/constants/calculatorButtons';

const Keypad = () => {

   return (
      <KeypadContainer>
         {calculatorButtons.map((elem) => {
            return (<KeypadButton dataButton={elem} key={elem.name} />)
         })}
      </KeypadContainer>
   );
}

export default Keypad;