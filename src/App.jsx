import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import AppRoutes from './routes/AppRoutes'
import { MyThemeLight, MyThemeDark } from '@/assest/styles/theme'

const App = () => {

   const { currentTheme } = useSelector(state => state.theme)

   return (
      <ThemeProvider theme={currentTheme === 'light' ? MyThemeLight : MyThemeDark}>
         <AppRoutes />
      </ThemeProvider>
   )
}

export default App