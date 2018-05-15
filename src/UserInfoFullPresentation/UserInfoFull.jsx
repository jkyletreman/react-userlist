import React from "react";
import UserData from "../context";

const UserInfoFull = () => {
  return (
    <UserData.Consumer>
      {context => (
        <ul>
          <li>{context.selectedUser.first}</li>
          <li>{context.selectedUser.last}</li>
          <li>{context.birthYear}</li>
          <li>{context.selectedUser.location}</li>
          <li>{context.selectedUser.description}</li>
        </ul>
      )}
    </UserData.Consumer>
  );
};

export default UserInfoFull;
