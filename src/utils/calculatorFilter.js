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

   console.log(currentValue, myCalculator.value, myCalculator.history)
   // проверяет на тип введенного значения. Может быть number (3, 4), operator (+, /) или action (С, CS, CE)
   switch (enteredType) {
      case 'number':
         // если после полученного ответа в выражении мы не ввели оператор, то начинаем новое выражение
         if (currentValue.operator === '' && myCalculator.history.length >= 1) {
            setCurrentValue({ ...currentValue, result: null })
            myCalculator.reset()
         }

         // при нажатии на кнопки с цифрами они попадают в текущее значение
         setCurrentValue({
            ...currentValue,
            value: currentValue.value + enteredValue,
         })
         break;
      case 'operator':
         if (enteredValue === '+' || enteredValue === '-' || enteredValue === '*' || enteredValue === '/' || enteredValue === '%') {

            // если массив истории пуст, то устанавливает 1 временное значение, чтобы дальше взять его для вычисления
            if (myCalculator.history.length === 0) {
               myCalculator.setValue(Number(currentValue.value))
            }

            //при вводе какого-то оператора, мы обнуляем поля, чтобы ввести новое для выражения
            setCurrentValue({
               ...currentValue,
               value: '',
               result: 0,
               operator: enteredValue,
            })

         } else if (enteredValue === '=' && currentValue.operator !== '' && currentValue.value !== '') {

            // вносим в историю редакса новое значение
            console.log(myCalculator.value, currentValue.value)
            dispatch(addHistoryAction(myCalculator.value, currentValue.operator, currentValue.value))

            // по оператору (+, -, /...) мы берем нужный экземпляр класса из commandsClass и создаем команду из него
            myCalculator.executeCommand(new commandsClass[currentValue.operator](Number(currentValue.value)))
            // обнуляем текущий ввод, чтобы вводить новое значение, после того как получили результат
            setCurrentValue({ ...currentValue, value: ``, operator: '', result: myCalculator.value })
         }
         break
      case 'action':
         switch (enteredValue) {
            case 'C':
               // если есть введенные числа, то удалем их по одному
               if (currentValue.value.length > 0 && currentValue.result === 0) {
                  setCurrentValue({ ...currentValue, value: currentValue.value.length > 1 ? currentValue.value.slice(0, -1) : '' })

                  // если введенных чисел нет, а получен результат вычисление, то удаляем этот результат, и начинаем с 0
               } else if (currentValue.value.length === 0 && currentValue.result > 0) {
                  setCurrentValue({ ...currentValue, result: 0 })
                  myCalculator.reset()
               }
               break;
            case 'CE':
               //обнуляет текущее поле ввода
               setCurrentValue({ ...currentValue, value: '', result: 0 })
               break;
            case 'CS':
               // добавляет или убирает минус перед числом
               currentValue.value.includes('-')
                  ? setCurrentValue({ ...currentValue, value: currentValue.value.replace('-', '') })
                  : setCurrentValue({ ...currentValue, value: '-' + currentValue.value })
               break;
            case '.':
               if (!currentValue.value.includes('.')) {
                  if (currentValue.value === '' || currentValue.value === '-') {
                     setCurrentValue({ ...currentValue, value: currentValue.value + '0.' })
                  } else {
                     setCurrentValue({ ...currentValue, value: currentValue.value + '.' })
                  }
               }
               break;
            default:
               break;
         }
         break
      default:
         break
   }
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