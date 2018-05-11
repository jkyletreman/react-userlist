import React from "react"

const UserInfoFull = ({ selectedUser, birthYear }) => {
  return (
    <ul>
      <li>{selectedUser.first}</li>
      <li>{selectedUser.last}</li>
      <li>{birthYear}</li>
      <li>{selectedUser.location}</li>
      <li>{selectedUser.description}</li>
    </ul>
  );
};

export default UserInfoFull
