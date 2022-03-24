import { CHANGE_THEME } from './constants'

const initialStore = {
   currentTheme: 'light',
}

export const themeReducer = (state = initialStore, action) => {
   switch (action.type) {
      case CHANGE_THEME:
         return {
            ...state,
            currentTheme: action.payload.newTheme,
         }
      default:
         return state
   }
}