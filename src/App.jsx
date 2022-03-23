import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Layout from '@/pages/Layout/Layout'
import Header from '@/components/Common/Header/Header'
import AppRoutes from './routes/AppRoutes'
import ErrorBoundary from '@/components/Common/ErrorBoundary/ErrorBoundary'
import { MyThemes } from '@/assest/styles/theme'

const App = () => {

   const { currentTheme } = useSelector(state => state.theme)

   return (
      <ThemeProvider theme={MyThemes[currentTheme]}>
         <ErrorBoundary>
            <Layout>
               <Header />
               <AppRoutes />
            </Layout>
         </ErrorBoundary>
      </ThemeProvider>
   )
}

export default App