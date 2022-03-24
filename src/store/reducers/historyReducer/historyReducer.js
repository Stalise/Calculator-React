import { ADD_HISTORY, CLEAR_HISTORY } from './constants'

const initialStore = {
   history: [],
}

export const historyReducer = (state = initialStore, action) => {
   switch (action.type) {
      case ADD_HISTORY:
         return {
            ...state,
            history: [...state.history, action.payload],
         }
      case CLEAR_HISTORY:
         return {
            ...state,
            history: [],
         }
      default:
         return state
   }
}