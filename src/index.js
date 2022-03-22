import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'
import GlobalStyles from '@/assest/styles/globalStyles'
import { theme } from '@/assest/styles/theme'
import { ThemeProvider } from 'styled-components'
import { store } from '@/store/store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
