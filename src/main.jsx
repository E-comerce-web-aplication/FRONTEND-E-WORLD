import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { EWordApp } from './App'
import { store } from './Store/store'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <EWordApp/>
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>,
)
