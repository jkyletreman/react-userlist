import React from "react";
import UserData from "../data/context";

const UserInfoFull = () => {
  return (
    <UserData.Consumer>
      {context => {
        context.state.userIsSelected
          ? context.state.userData
              .filter(user => `${user.first} ${user.last}` === context.state.selectedUser)
              .map(user => {
                return (
                  <ul>
                    <li>{user.first}</li>
                  </ul>
                );
              })
          : null;
      }}
    </UserData.Consumer>
  );
};

export default UserInfoFull;
