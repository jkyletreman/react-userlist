import React from "react";
import UserData from "../context";

const UserInfoFull = ({ userData, selectedUser }) => {
  const additionalInfo = userData
    .filter(user => `${user.first} ${user.last}` === selectedUser)
    .map(user => {
      return (
        <ul>
          <li>{user.first}</li>
        </ul>
      );
    });
  return (
    <React.Fragment>
      <div>Ok now what</div>
      {additionalInfo}
    </React.Fragment>
  );
};

export default UserInfoFull;
