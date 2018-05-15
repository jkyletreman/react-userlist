import React from 'react';
import ReactDOM from 'react-dom';
import UserDataProvider from "./UserDataProvider/UserDataProvider";
import App from "./App/App";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <UserDataProvider>
    <App />
  </UserDataProvider>
  , document.getElementById('root'));
registerServiceWorker();
