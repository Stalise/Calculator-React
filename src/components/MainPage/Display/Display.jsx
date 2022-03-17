import React from 'react';
import { DisplayText } from './style';

const Display = ({ calcValues }) => {

   const result = Object.values(calcValues).join(' ')

   return (
      <DisplayText>{result}</DisplayText>
   );
}

export default Display;