
export const addDot = (nameValue, currentValue, setCurrentValue) => {

   let addedDot = '';

   if (currentValue[nameValue].length === 0 && !currentValue[nameValue].includes('.')) {
      addedDot = '0.'
   } else if (currentValue[nameValue].length > 0 && !currentValue[nameValue].includes('.')) {
      addedDot = currentValue[nameValue] + '.'
   } else {
      return
   }

   setCurrentValue({
      ...currentValue,
      [nameValue]: addedDot,
   })
}