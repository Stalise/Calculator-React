import React from 'react';
import { Button } from './style';


const KeypadButton = ({ dataButton, ...props }) => {

   return (
      <Button
         typeStyle={dataButton.type}
         {...props}
      >
         {dataButton.name}
      </Button>
   );
}

export default KeypadButton;