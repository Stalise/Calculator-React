
export class Calculator {
   constructor() {
      this.value = 0
      this.history = []
   }

   executeCommand(command) {
      this.value = Number(command.execute().toFixed(2))
      this.setHistory(this.value)
   }

   setValue(value) {
      this.value = value
   }

   setHistory(value) {
      this.history.push(value)
   }

   reset() {
      this.value = 0
      this.history = []
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