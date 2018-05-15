import React from "react";
import UserData from "../context";

const UserList = ({ handleClick }) => {
  return (
    <ul>
      <UserData.Consumer>
        {context =>
          context.map(user => {
            return (
              <li key={user.id} onClick={handleClick}>
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
