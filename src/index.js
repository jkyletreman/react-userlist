import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserListContainer from "./UserListContainer/UserListContainer"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<UserListContainer />, document.getElementById('root'));
registerServiceWorker();
