import React from "react";
import UserData from "../data/context";

export const UserList = () => {
  return (
    <UserData.Consumer>
      {context => {
        return context.state.userData.map(user => {
          return (
            <div key={user.id}>
              <li
                className="username"
                style={{display: 'inline-block'}}
                onClick={context.selectUser}
              >
                {user.first} {user.last}
              </li>
              <button style={{display: 'inline-block'}} onClick={context.deleteUser}>Delete User</button>
            </div>
          );
        });
      }}
    </UserData.Consumer>
  );
};

export default UserList;
