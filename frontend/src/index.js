import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import manageShop from './reducers/manageShop';
import thunk from 'redux-thunk'

const store = createStore(manageShop,applyMiddleware(thunk))
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
  ,
  document.getElementById('root')
);

