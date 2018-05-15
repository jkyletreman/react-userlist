import React from "react";

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
