import React from "react";
import UserData from "../context";

const UserInfoFull = ({ userData, selectedUser }) => {
  return (
    <React.Fragment>
      {userData
        .filter(user => `${user.first} ${user.last}` === selectedUser)
        .map(user => {
          return (
            <ul>
              <li>{user.first}</li>
            </ul>
          );
        })}
    </React.Fragment>
  );
};

export default UserInfoFull;
