import { CHANGE_THEME } from '@/store/reducers/themeReducer/constants'

export const changeThemeAction = newTheme => {
   return { type: CHANGE_THEME, payload: { newTheme } }
}