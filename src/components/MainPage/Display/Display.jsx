import React from 'react';
import PropTypes from 'prop-types';
import { DisplayText } from './style';
import { myCalculator } from '@/utils/calculatorFilter';

const Display = ({ currentValue }) => {

   return (
      <DisplayText>{currentValue.value === '' ? currentValue.result : currentValue.value}</DisplayText>
   );
}

Display.propTypes = {
   currentValue: PropTypes.shape({
      value: PropTypes.string,
      operator: PropTypes.string,
      result: PropTypes.number,
   })
}

export default Display;