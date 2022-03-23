import { Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'

import MainPage from '@/pages/MainPage/MainPage'
import SettingsPage from '@/pages/SettingsPage/SettingsPage'

const AppRoutes = () => {

   return (
      <Switch>
         <Route component={MainPage} path="/"
exact />
         <Route component={SettingsPage} path="/settings"
exact />
         <Redirect to="/" />
      </Switch>
   )
}

export default AppRoutes