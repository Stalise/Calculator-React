import { Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'

import MainPage from '@/pages/MainPage/MainPage'
import SettingsPage from '@/pages/SettingsPage/SettingsPage'
import ErrorBoundary from '@/components/Common/ErrorBoundary/ErrorBoundary'

const AppRoutes = () => {

   return (
      <Switch>
         <ErrorBoundary>
            <Route component={MainPage} path="/"
exact />
            <Route component={SettingsPage} path="/settings"
exact />
            <Redirect to="/" />
         </ErrorBoundary>
      </Switch>
   )
}

export default AppRoutes