import React from 'react';
import userData from './data/userData.json';

const state = { userData };

const UserData = React.createContext(state.userData);

export default UserData;
