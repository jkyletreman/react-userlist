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
              <ul key={i} className="additional-info-list">
                <li className="additional-info-item">{user.first}</li>
                <li className="additional-info-item">{user.last}</li>
                <li className="additional-info-item">{user.location}</li>
                <li className="additional-info-item">{user.description}</li>
                <li className="additional-info-item">{calculateBirthYear(user.age)}</li>
              </ul>
            );
          })
      : <p className="user-tutorial">Click a user to see more!</p>;
  return (
    <div>
      {user}
    </div>
)};

export default UserInfoFull;
