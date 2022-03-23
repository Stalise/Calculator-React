import { Calculator } from "./calculatorCommands"
import { addDot, equalLogic, checkZero } from './helpersCalculatorLogic'

export const myCalculator = new Calculator

export const enteredNumberType = (enteredValue, currentValues, setCurrentValues) => {
   const currentChangeValue = currentValues.operator === '' ? 'firstValue' : 'secondValue'

   enteredValue = checkZero(enteredValue, currentValues[currentChangeValue])

   setCurrentValues({
      ...currentValues,
      [currentChangeValue]: currentValues[currentChangeValue] + enteredValue,
   })
}

export const enteredOperatorType = (enteredValue, currentValues, setCurrentValues, dispatch) => {

   const { firstValue } = { ...currentValues }

   if (firstValue !== '' && enteredValue !== '=') {
      setCurrentValues({
         ...currentValues,
         operator: enteredValue,
      })
   }

   if (enteredValue === '=') {
      equalLogic(currentValues, setCurrentValues, dispatch)
   }
}

export const enteredActionType = (enteredValue, currentValues, setCurrentValues) => {

   const { firstValue, operator, secondValue } = { ...currentValues }

   switch (enteredValue) {
      case 'C':
         setCurrentValues({
            ...currentValues,
            firstValue: '',
            operator: '',
            secondValue: '',
         })
         break
      case 'CE':
         if (secondValue.length > 0) {
            setCurrentValues({
               ...currentValues,
               secondValue: '',
            })
         } else if (operator !== '') {
            setCurrentValues({
               ...currentValues,
               operator: '',
            })
         } else if (firstValue.length > 0) {
            setCurrentValues({
               ...currentValues,
               firstValue: '',
            })
         }
         break
      case '←':
         if (secondValue.length > 0) {
            setCurrentValues({
               ...currentValues,
               secondValue: secondValue.slice(0, -1),
            })
         } else if (operator !== '') {
            setCurrentValues({
               ...currentValues,
               operator: '',
            })
         } else if (firstValue.length > 0) {
            setCurrentValues({
               ...currentValues,
               firstValue: firstValue.slice(0, -1),
            })
         }
         break
      case '.':
         if (operator !== '') {
            addDot('secondValue', currentValues, setCurrentValues)
         } else {
            addDot('firstValue', currentValues, setCurrentValues)
         }
         break
      default:

   }
}















