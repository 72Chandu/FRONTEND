import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux"
import App from './App.jsx'
import { store } from './store/store.jsx'
import {BrowserRouter} from 'react-router-dom'
ReactDom.createRoot(document.getElementById("root")).render(
  <Provider store={store} >
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </Provider>
);