import React, { useState } from 'react'

import { CalculatorWrapper, LeftContainer, RightContainer } from './style'
import Display from '@/components/MainPage/Display/Display'
import Keypad from '@/components/MainPage/Keypad/Keypad'
import History from '@/components/MainPage/History/History'

const Calculator = () => {

   const [currentValues, setCurrentValues] = useState({
      firstValue: '',
      operator: '',
      secondValue: '',
   })

   return (
      <CalculatorWrapper>
         <LeftContainer >
            <Display currentValues={currentValues} />

            <Keypad
               currentValues={currentValues}
               setCurrentValues={setCurrentValues}
            />
         </LeftContainer>
         <RightContainer >
            <History />
         </RightContainer>
      </CalculatorWrapper>
   )
}

export default Calculator