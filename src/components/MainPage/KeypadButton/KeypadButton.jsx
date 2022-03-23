import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './style'


const KeypadButton = ({ dataButton, changeValues }) => {

   return (
      <Button
         typeStyle={dataButton.type}
         onClick={changeValues}
      >
         {dataButton.name}
      </Button>
   )
}

KeypadButton.propTypes = {
   dataButton: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
   }),
   changeValues: PropTypes.func,
}

export default KeypadButton