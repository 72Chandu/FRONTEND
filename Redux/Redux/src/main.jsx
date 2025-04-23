import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux"
import App from './App.jsx'
import {store} from './Store/Store.jsx'
ReactDom.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App/>
  </Provider>
);
//Once the store is created, we can make it available to our React components by putting a React-Redux <Provider> around our application in src/main.jsx.  put a <Provider> around your <App>, and pass the store as a prop: