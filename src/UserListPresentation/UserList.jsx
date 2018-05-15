import React from "react";
import UserData from "../context";

const UserList = ({ userData, selectUser}) => {
  return (
    <ul>
      {userData.map(user => {
        return (
          <li key={user.id} onClick={selectUser}>
            {user.first} {user.last}
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;
