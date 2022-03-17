import React, { useState } from 'react';
import { CalculatorWrapper, LeftContainer, RightContainer } from './style';
import Display from '@/components/MainPage/Display/Display';
import Keypad from '@/components/MainPage/Keypad/Keypad';
import History from '@/components/MainPage/History/History';

const Calculator = () => {

   const [calcValues, setCalcValues] = useState({
      firstValue: '25',
      operator: '+',
      secondValue: '30',
   })

   return (
      <CalculatorWrapper>
         <LeftContainer >
            <Display calcValues={calcValues} />
            <Keypad />
         </LeftContainer>
         <RightContainer >
            <History />
         </RightContainer>
      </CalculatorWrapper>
   );
}

export default Calculator;