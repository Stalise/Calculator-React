import React from 'react';
import { KeypadContainer } from './style';
import KeypadButton from '../KeypadButton/KeypadButton';
import { calculatorButtons } from '@/constants/calculatorButtons';

const Keypad = ({ changeValues }) => {

   return (
      <KeypadContainer>
         {calculatorButtons.map((elem) => {
            return (
               <KeypadButton
                  dataButton={elem}
                  key={elem.name}
                  onClick={() => changeValues(elem.name, elem.type )}
               />)
         })}
      </KeypadContainer>
   );
}

export default Keypad;