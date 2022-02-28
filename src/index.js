import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/mocks/App';
import App from './components/App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './reducers';
import middleware from './middleware';

const store = createStore(Reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
