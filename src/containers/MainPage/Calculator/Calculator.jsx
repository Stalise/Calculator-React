import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CalculatorWrapper, LeftContainer, RightContainer } from './style';
import Display from '@/components/MainPage/Display/Display';
import Keypad from '@/components/MainPage/Keypad/Keypad';
import History from '@/components/MainPage/History/History';
import { filterCommand, myCalculator } from '@/utils/calculatorFilter';

const Calculator = () => {

   const dispatch = useDispatch()

   const [currentValue, setCurrentValue] = useState({
      value: '',
      operator: '',
      result: null,
   });

   const changeValues = (enteredValue, enteredType) => {
      filterCommand(enteredValue, enteredType, currentValue, setCurrentValue, dispatch)
   }

   // при загрузке страницы main берем старое значение которое было введено из истории калькулятора
   useEffect(() => {
      setCurrentValue({ ...currentValue, result: myCalculator.value })
   }, [])

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
   );
}

export default Calculator;