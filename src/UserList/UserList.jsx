import React from "react";

const UserList = ({ userData, handleClick }) => {
  return (
    <ul>
      {userData.map(user => (
        <li key={user.id} onClick={handleClick}>
          {user.first} {user.last}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
