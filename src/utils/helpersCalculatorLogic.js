import { AddCommand, SubtractCommand, MultiplyCommand, DivideCommand, RemainderCommand } from "./calculatorCommands"
import { myCalculator } from "./calculatorLogic"
import { addHistoryAction } from '@/actions/historyReducer'

const commandsClass = {
   '+': AddCommand,
   '-': SubtractCommand,
   '*': MultiplyCommand,
   '/': DivideCommand,
   '%': RemainderCommand,
}

export const addDot = (nameValue, currentValues, setCurrentValues) => {

   let addedDot = ''

   if (currentValues[nameValue].length === 0 && !currentValues[nameValue].includes('.')) {
      addedDot = '0.'
   } else if (currentValues[nameValue].length > 0 && !currentValues[nameValue].includes('.')) {
      addedDot = currentValues[nameValue] + '.'
   } else {
      return
   }

   setCurrentValues({
      ...currentValues,
      [nameValue]: addedDot,
   })
}

export const equalLogic = (currentValues, setCurrentValues, dispatch) => {
   const { firstValue, operator, secondValue } = { ...currentValues }

   if (firstValue !== '' && operator !== '' && secondValue !== '') {

      dispatch(addHistoryAction(firstValue, operator, secondValue))

      myCalculator.executeCommand(new commandsClass[operator](firstValue, secondValue))

      setCurrentValues({
         ...currentValues,
         firstValue: myCalculator.value === 0 ? '' : String(myCalculator.value),
         operator: '',
         secondValue: '',
      })
   }
}

export const checkZero = (enteredValue, currentValue) => {
   if (enteredValue === '0' && currentValue === '') {
      return ''
   }

   return enteredValue
}