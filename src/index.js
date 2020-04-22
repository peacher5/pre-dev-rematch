import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { init } from '@rematch/core'
import { Provider } from 'react-redux'

import App from './App'
import * as models from './models'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const store = init({ models })

ReactDOM.render(
  <Provider store={store}>
    <App />
    <GlobalStyle />
  </Provider>,
  document.getElementById('root')
)
