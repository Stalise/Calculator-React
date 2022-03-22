import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { CalculatorWrapper, LeftContainer, RightContainer } from './style'
import Display from '@/components/MainPage/Display/Display'
import Keypad from '@/components/MainPage/Keypad/Keypad'
import History from '@/components/MainPage/History/History'
import { myCalculator, enteredNumberType, enteredOperatorType, enteredActionType } from '@/utils/calculatorHandler'

const Calculator = () => {

   const dispatch = useDispatch()

   const [currentValue, setCurrentValue] = useState({
      firstValue: '',
      operator: '',
      secondValue: '',
   })

   const changeValues = (enteredValue, enteredType) => {

      switch (enteredType) {
         case 'number':
            enteredNumberType(enteredValue, currentValue, setCurrentValue)
            break;
         case 'operator':
            enteredOperatorType(enteredValue, currentValue, setCurrentValue, dispatch)
            break;
         case 'action':
            enteredActionType(enteredValue, currentValue, setCurrentValue)
            break;
      }
   }

   return (
      <CalculatorWrapper>
         <LeftContainer >
            <Display currentValue={currentValue} />
            <Keypad changeValues={changeValues} />
         </LeftContainer>
         <RightContainer >
            <History />
         </RightContainer>
      </CalculatorWrapper>
   )
}

export default Calculator