import React from 'react';
import App from './App';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(rootReducer)
​
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();