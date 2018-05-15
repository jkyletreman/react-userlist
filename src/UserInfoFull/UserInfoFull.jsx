import React from "react";
import UserData from "../data/context";

const UserInfoFull = () => {
  return (
    <UserData.Consumer>
      {context => (
        <UserInfo
          userData={context.state.userData}
          selectedUser={context.state.selectedUser}
          calculateBirthYear={context.calculateBirthYear}
        />
      )}
    </UserData.Consumer>
  );
};

const UserInfo = ({ userData, calculateBirthYear, selectedUser }) => {
  const user =
    selectedUser !== ""
      ? userData
          .filter(user => `${user.first} ${user.last}` === selectedUser)
          .map((user, i) => {
            return (
              <ul key={i}>
                <li>{user.first}</li>
                <li>{user.last}</li>
                <li>{user.location}</li>
                <li>{user.description}</li>
                <li>{calculateBirthYear(user.age)}</li>
              </ul>
            );
          })
      : <p>Click a user to see more!</p>;
  return (
    <div>
      {user}
    </div>
)};

export default UserInfoFull;
