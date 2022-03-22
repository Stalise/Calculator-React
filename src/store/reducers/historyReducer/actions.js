import { ADD_HISTORY, CLEAR_HISTORY } from './constants'

export const addHistoryAction = (firstValue, operator, secondValue) => {
   return { type: ADD_HISTORY, payload: { firstValue, operator, secondValue } }
}

export const clearHistoryAction = () => {
   return { type: CLEAR_HISTORY }
}