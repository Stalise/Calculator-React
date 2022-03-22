import { Calculator, AddCommand, SubtractCommand, MultiplyCommand, DivideCommand, RemainderCommand } from "./calculatorLogic"
import { addDot } from './helpersCalculatorHandler';
import { addHistoryAction } from '@/store/reducers/historyReducer/actions';

export const myCalculator = new Calculator

const commandsClass = {
   '+': AddCommand,
   '-': SubtractCommand,
   '*': MultiplyCommand,
   '/': DivideCommand,
   '%': RemainderCommand,
}

export const enteredNumberType = (enteredValue, currentValue, setCurrentValue) => {
   const currentChangeValue = currentValue.operator === '' ? 'firstValue' : 'secondValue'

   setCurrentValue({
      ...currentValue,
      [currentChangeValue]: currentValue[currentChangeValue] + enteredValue,
   })
}

export const enteredOperatorType = (enteredValue, currentValue, setCurrentValue, dispatch) => {

   const { firstValue, operator, secondValue } = { ...currentValue }

   if (firstValue !== '' && enteredValue !== '=') {
      setCurrentValue({
         ...currentValue,
         operator: enteredValue,
      })
   }

   if (enteredValue === '=' && firstValue !== '' && operator !== '' && secondValue !== '') {

      dispatch(addHistoryAction(firstValue, operator, secondValue))

      myCalculator.executeCommand(new commandsClass[operator](firstValue, secondValue))

      setCurrentValue({
         ...currentValue,
         firstValue: String(myCalculator.value),
         operator: '',
         secondValue: '',
      })
   }
}

export const enteredActionType = (enteredValue, currentValue, setCurrentValue) => {

   const { firstValue, operator, secondValue } = { ...currentValue }

   switch (enteredValue) {
      case 'C':
         setCurrentValue({
            ...currentValue,
            firstValue: '',
            operator: '',
            secondValue: '',
         })
         break
      case 'CE':
         if (secondValue.length > 0) {
            setCurrentValue({
               ...currentValue,
               secondValue: '',
            })
         } else if (operator !== '') {
            setCurrentValue({
               ...currentValue,
               operator: '',
            })
         } else if (firstValue.length > 0) {
            setCurrentValue({
               ...currentValue,
               firstValue: '',
            })
         }
         break
      case '.':
         if (operator !== '') {
            addDot('secondValue', currentValue, setCurrentValue)
         } else {
            addDot('firstValue', currentValue, setCurrentValue)
         }
         break;
      default:
         return;
   }
}

















// case 'C':
//    if (secondValue.length > 0) {
//       setCurrentValue({
//          ...currentValue,
//          secondValue: secondValue.slice(0, -1)
//       })
//    } else if (operator !== '') {
//       setCurrentValue({
//          ...currentValue,
//          operator: ''
//       })
//    } else if (firstValue.length > 0) {
//       setCurrentValue({
//          ...currentValue,
//          firstValue: firstValue.slice(0, -1)
//       })
//    }