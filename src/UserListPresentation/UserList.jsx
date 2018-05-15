import React from "react";
import UserData from "../context";

const UserList = () => {
  return (
    <ul>
      <UserData.Consumer>
        {context =>
          context.state.userData.map(user => {
            return (
              <li key={user.id} onClick={context.selectUser}>
                {user.first} {user.last}
              </li>
            );
          })
        }
      </UserData.Consumer>
    </ul>
  );
};

export default UserList;
