import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Router from './Router';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import { UserContextProvider } from './context/userContext';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <>
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
