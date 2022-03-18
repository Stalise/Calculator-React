import React from 'react';
import { DisplayText } from './style';
import { myCalculator } from '@/utils/calculatorFilter';

const Display = ({ currentValue }) => {

   return (
      <DisplayText>{currentValue.value === '' ? currentValue.result : currentValue.value}</DisplayText>
   );
}

export default Display;