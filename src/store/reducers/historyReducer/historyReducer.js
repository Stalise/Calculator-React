
const ADD_HISTORY = "ADD_HISTORY";
const CLEAR_HISTORY = "CLEAR_HISTORY";

const initialStore = {
   history: []
}

export const historyReducer = (state = initialStore, action) => {
   switch (action.type) {
      case ADD_HISTORY:
         return {
            ...state,
            history: [...state.history, action.payload]
         }
      case CLEAR_HISTORY:
         return {
            ...state,
            history: []
         }
      default:
         return state
   }
}

export const addHistoryAction = (firstValue, operator, secondValue) => {
   return { type: ADD_HISTORY, payload: { firstValue, operator, secondValue } }
}

export const clearHistoryAction = () => {
   return { type: CLEAR_HISTORY }
}