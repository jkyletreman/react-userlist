import React from "react";
import UserData from "../data/context";

export const UserList = () => {
  return (
    <UserData.Consumer>
      {context => {
        return context.state.userData.map(user => {
          return (
            <li key={user.id} onClick={context.selectUser}>
              {user.first} {user.last}
            </li>
          );
        });
      }}
    </UserData.Consumer>
  );
};

export default UserList;
