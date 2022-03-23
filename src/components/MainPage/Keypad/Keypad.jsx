import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'


import { KeypadContainer } from './style'
import { calculatorButtons } from '@/constants/calculatorButtons'
import { enteredNumberType, enteredOperatorType, enteredActionType } from '@/utils/calculatorLogic'
import KeypadButton from '../KeypadButton/KeypadButton'

const Keypad = ({ currentValues, setCurrentValues }) => {

   const dispatch = useDispatch()

   const changeValues = (enteredValue, enteredType) => {
      switch (enteredType) {
         case 'number':
            enteredNumberType(enteredValue, currentValues, setCurrentValues)
            break
         case 'operator':
            enteredOperatorType(enteredValue, currentValues, setCurrentValues, dispatch)
            break
         case 'action':
            enteredActionType(enteredValue, currentValues, setCurrentValues)
            break
      }
   }

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
   currentValues: PropTypes.shape({
      firstValue: PropTypes.string,
      operator: PropTypes.string,
      secondValue: PropTypes.string,
   }),
   setCurrentValues: PropTypes.func,
}

export default Keypad