import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserDataProvider from "./UserDataProvider/UserDataProvider";
import UserListContainer from "./UserListContainer/UserListContainer";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <UserDataProvider>
    <UserListContainer />
  </UserDataProvider>
  , document.getElementById('root'));
registerServiceWorker();
