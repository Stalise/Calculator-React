import { CHANGE_THEME } from './constants'

export const changeThemeAction = newTheme => {
   return { type: CHANGE_THEME, payload: { newTheme } }
}