import React from 'react';
import { Button } from './style';


const KeypadButton = ({ dataButton }) => {

   return (
      <Button typeStyle={dataButton.type}>{dataButton.name}</Button>
   );
}

export default KeypadButton;