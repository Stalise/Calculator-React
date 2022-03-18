import { Calculator, AddCommand, SubtractCommand, MultiplyCommand, DivideCommand, RemainderCommand } from "./calculatorLogic";
import { addHistoryAction } from '@/store/reducers/historyReducer/historyReducer';

export const myCalculator = new Calculator

const commandsClass = {
   '+': AddCommand,
   '-': SubtractCommand,
   '*': MultiplyCommand,
   '/': DivideCommand,
   '%': RemainderCommand,
}

// функция помогает вызывать нужные команды калькулятора в зависимости от введенных данных
export const filterCommand = (enteredValue, enteredType, currentValue, setCurrentValue, dispatch) => {

   // проверяет на тип введенного значения. Может быть number (3, 4), operator (+, /) или action (С, CS, CE)
   switch (enteredType) {
      case 'number':
         setCurrentValue({
            ...currentValue,
            value: currentValue.value + enteredValue,
         })
      case 'operator':
         if (enteredValue === '+' || enteredValue === '-' || enteredValue === '*' || enteredValue === '/' || enteredValue === '%') {

            // если массив истории пуст, то устанавливает 1 временное значение, чтобы дальше взять его для выражения
            if (myCalculator.history.length === 0) {
               myCalculator.setValue(Number(currentValue.value))
            }

            setCurrentValue({
               ...currentValue,
               value: '',
               result: myCalculator.history[myCalculator.history.length - 1],
               operator: enteredValue,
            })

         } else if (enteredValue === '=' && currentValue.operator !== '') {

            dispatch(addHistoryAction(myCalculator.value, currentValue.operator, currentValue.value))

            // по оператору (+, -, /...) мы берем нужный экземпляр класса из commandsClass и создаем команду из него
            myCalculator.executeCommand(new commandsClass[currentValue.operator](Number(currentValue.value)))
            setCurrentValue({ ...currentValue, value: '', operator: '', result: myCalculator.value })
         }
      default:
         break
   }







   // switch (enteredValue) {
   //    case '+':
   //       myCalculator.setValue(Number(currentValue.result))
   //       setCurrentValue({ ...currentValue, value: '', operator: enteredValue, result: myCalculator.value })
   //       break;
   //    case '-':
   //       myCalculator.setValue(Number(currentValue.result))
   //       setCurrentValue({ ...currentValue, value: '', operator: enteredValue, result: myCalculator.value })
   //       break;
   //    case '*':
   //       myCalculator.setValue(Number(currentValue.result))
   //       setCurrentValue({ ...currentValue, value: '', operator: enteredValue, result: myCalculator.value })
   //       break;
   //    case '/':
   //       myCalculator.setValue(Number(currentValue.result))
   //       setCurrentValue({ ...currentValue, value: '', operator: enteredValue, result: myCalculator.value })
   //       break;
   //    case '=':
   //       if (currentValue.operator !== '') {
   //          myCalculator.executeCommand(new commandsClass[currentValue.operator](Number(currentValue.value)))
   //          setCurrentValue({ ...currentValue, value: '', operator: '', result: myCalculator.value })
   //       }
   //       break
   //    default:
   //       break
   // }




   // switch (currentValue.operator) {
   //    case '+':
   //       myCalculator.executeCommand(new AddCommand(Number(currentValue.value)))
   //       setCurrentValue({ ...currentValue, value: '', operator: '', result: myCalculator.value })
   //       break;
   //    case '-':
   //       myCalculator.executeCommand(new SubtractCommand(Number(currentValue.value)))
   //       setCurrentValue({ ...currentValue, value: '', operator: '', result: myCalculator.value })
   //       break;
   //    case '*':
   //       myCalculator.executeCommand(new MultiplyCommand(Number(currentValue.value)))
   //       setCurrentValue({ ...currentValue, value: '', operator: '', result: myCalculator.value })
   //       break;
   //    case '/':
   //       myCalculator.executeCommand(new DivideCommand(Number(currentValue.value)))
   //       setCurrentValue({ ...currentValue, value: '', operator: '', result: myCalculator.value })
   //       break;
   //    default:
   //       break;
   // }
}
         // default: null