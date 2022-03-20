
// Калькулятор и его команды ниже
export class Calculator {
   constructor() {
      this.value = 0;
      this.history = [];
   }

   // при вызове команды, она получает текущее значение калькулятора, и в себе делает необходимые операции
   executeCommand(command) {
      // если получается большое число, то обрезаем до 3-десятой, и убираем лишние дробные нули через Number
      this.value = Number(command.execute(this.value).toFixed(2))
      this.setHistory(this.value)
   }

   setValue(value) {
      this.value = value
   }

   setHistory(value) {
      this.history.push(value)
   }

   reset() {
      this.value = 0;
      this.history = [];
   }
}

export class AddCommand {
   // сюда попадает текущее введенное значение, когда мы создаем новый объект команды в calculatorFilter
   constructor(enteredValue) {
      this.enteredValue = enteredValue
   }

   // здесь получаем текущее значение калькулятора переданное при вызове exucute в команде
   execute(currentValue) {
      return currentValue + this.enteredValue
   }
}

export class SubtractCommand {
   constructor(enteredValue) {
      this.enteredValue = enteredValue
   }

   execute(currentValue) {
      return currentValue - this.enteredValue
   }
}

export class MultiplyCommand {
   constructor(enteredValue) {
      this.enteredValue = enteredValue
   }

   execute(currentValue) {
      return currentValue * this.enteredValue
   }
}

export class DivideCommand {
   constructor(enteredValue) {
      this.enteredValue = enteredValue
   }

   execute(currentValue) {
      return currentValue / this.enteredValue
   }
}

export class RemainderCommand {
   constructor(enteredValue) {
      this.enteredValue = enteredValue
   }

   execute(currentValue) {
      return currentValue % this.enteredValue
   }
}