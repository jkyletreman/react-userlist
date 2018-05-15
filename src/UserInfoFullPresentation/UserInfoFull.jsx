import React from "react";
import UserData from "../context";

const UserInfoFull = birthYear => {
  return (
    <UserData.Consumer>
      {user => (
        console.log(user)

      )}
    </UserData.Consumer>
  );
};

export default UserInfoFull;

{/* <ul>
  <li>{user.first}</li>
  <li>{user.last}</li>
  <li>{birthYear}</li>
  <li>{user.location}</li>
  <li>{user.description}</li>
</ul> */}
