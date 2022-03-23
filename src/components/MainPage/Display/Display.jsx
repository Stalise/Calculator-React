import React from 'react'
import PropTypes from 'prop-types'
import { DisplayText } from './style'

const Display = ({ currentValues }) => {

   const result = Object.values(currentValues).join(' ')

   return (
      <DisplayText>{currentValues.firstValue !== '' ? result : '0'}</DisplayText>
   )
}

Display.propTypes = {
   currentValues: PropTypes.shape({
      firstValue: PropTypes.string,
      operator: PropTypes.string,
      secondValue: PropTypes.string,
   }),
}

export default Display