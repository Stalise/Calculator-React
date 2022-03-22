import React from 'react'
import PropTyps from 'prop-types'
import { KeypadContainer } from './style'
import KeypadButton from '../KeypadButton/KeypadButton'
import { calculatorButtons } from '@/constants/calculatorButtons'

const Keypad = ({ changeValues }) => {

   return (
      <KeypadContainer>
         {calculatorButtons.map(elem => {
            return (
               <KeypadButton
                  dataButton={elem}
                  key={elem.name}
                  changeValues={() => changeValues(elem.name, elem.type)}
               />)
         })}
      </KeypadContainer>
   )
}

Keypad.propTypes = {
   changeValues: PropTyps.func,
}

export default Keypad