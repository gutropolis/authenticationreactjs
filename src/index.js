import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch,Redirect, withRouter} from 'react-router-dom';

// Reduces import
import AppReducer from './reducers';

//REDUX imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Redux middleware
import thunk from 'redux-thunk'; // dispatch() functions async
import logger from 'redux-logger'; // nice actions -> state console.logs

import App from './components/App';


// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
  // Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'



const store = createStore(AppReducer, applyMiddleware(thunk, logger));
console.log('STORE state', store.getState());

 
ReactDOM.render(
<Provider  store={store} >
    <App />
</Provider>, document.getElementById('root'));