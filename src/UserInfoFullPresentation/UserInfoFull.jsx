import React from "react";
import UserData from "../context";

const UserInfoFull = ({ userData, selectedUser }) => {
  const additionalInfo = selectedUser
    ? this.props.userData.filter(
        user => `${user.first} ${user.last}` === selectedUser
      )
    : null;

  const userInfo = additionalInfo => {
    return additionalInfo.map(user => {
      return (
        <ul>
          <li>{user.first}</li>
          <li>{user.last}</li>
          <li>{user.location}</li>
          <li>{user.description}</li>
        </ul>
      );
    });
  };
  return (
    <React.Fragment>
      {userInfo}
    </React.Fragment>
  );
};

export default UserInfoFull;
