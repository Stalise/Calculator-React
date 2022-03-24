
export class Calculator {
   constructor() {
      this.value = 0
      this.history = []
   }

   executeCommand(command) {
      this.value = Number(command.execute().toFixed(3))
      this.setHistory(this.value)
   }

   setHistory(value) {
      this.history.push(value)
   }
}

export class AddCommand {
   constructor(firstValue, secondValue) {
      this.firstValue = Number(firstValue)
      this.secondValue = Number(secondValue)
   }

   execute() {
      return this.firstValue + this.secondValue
   }
}

export class SubtractCommand {
   constructor(firstValue, secondValue) {
      this.firstValue = Number(firstValue)
      this.secondValue = Number(secondValue)
   }

   execute() {
      return this.firstValue - this.secondValue
   }
}

export class MultiplyCommand {
   constructor(firstValue, secondValue) {
      this.firstValue = Number(firstValue)
      this.secondValue = Number(secondValue)
   }

   execute() {
      return this.firstValue * this.secondValue
   }
}

export class DivideCommand {
   constructor(firstValue, secondValue) {
      this.firstValue = Number(firstValue)
      this.secondValue = Number(secondValue)
   }

   execute() {
      return this.firstValue / this.secondValue
   }
}

export class RemainderCommand {
   constructor(firstValue, secondValue) {
      this.firstValue = Number(firstValue)
      this.secondValue = Number(secondValue)
   }

   execute() {
      return this.firstValue % this.secondValue
   }
}