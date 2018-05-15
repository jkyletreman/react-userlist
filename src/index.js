import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserDataProvider from "./UserDataProvider/UserDataProvider";
import App from "./App/App";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <UserDataProvider>
    <App />
  </UserDataProvider>
  , document.getElementById('root'));
registerServiceWorker();
