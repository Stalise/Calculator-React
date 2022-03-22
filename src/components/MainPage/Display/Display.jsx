import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { DisplayText } from './style'
import { myCalculator } from '@/utils/calculatorHandler'

const Display = ({ currentValue }) => {

   const result = Object.values(currentValue).join(' ')

   return (
      <DisplayText>{currentValue.firstValue !== '' ? result : '0'}</DisplayText>
   )
}

Display.propTypes = {
   currentValue: PropTypes.shape({
      firstValue: PropTypes.string,
      operator: PropTypes.string,
      secondValue: PropTypes.string,
   }),
}

export default Display