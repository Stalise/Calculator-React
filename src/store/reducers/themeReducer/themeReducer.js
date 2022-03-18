
const CHANGE_THEME = "CHANGE_THEME";

const initialStore = {
   currentTheme: 'light',
}

export const themeReducer = (state = initialStore, action) => {
   switch (action.type) {
      case CHANGE_THEME:
         return {
            ...state,
            currentTheme: action.payload.newTheme
         }
      default:
         return state
   }
}

export const changeThemeAction = (newTheme) => {
   return { type: CHANGE_THEME, payload: { newTheme } }
}