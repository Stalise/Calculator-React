import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from '@/pages/MainPage/MainPage';
import SettingsPage from '@/pages/SettingsPage/SettingsPage';
import { ThemeProvider } from 'styled-components';
import { MyThemeLight, MyThemeDark } from '@/assest/styles/theme';
import ErrorBoundary from './components/Common/ErrorBoundary/ErrorBoundary';

const App = () => {

   const dispatch = useDispatch()

   const { currentTheme } = useSelector(state => state.theme)

   return (
      <ThemeProvider theme={currentTheme === 'light' ? MyThemeLight : MyThemeDark}>
         <Switch>
            <ErrorBoundary>
               <Route component={MainPage} path={'/'} exact={true} />
               <Route component={SettingsPage} path={'/settings'} />
               <Redirect to='/' />
            </ErrorBoundary>
         </Switch>
      </ThemeProvider>
   );
}

export default App;