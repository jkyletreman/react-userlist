import React from "react";
import UserList from "../UserList/UserList";
import UserInfoFull from "../UserInfoFull/UserInfoFull";
// import UserData from "../data/context";

const App = () => {
  return (
    <React.Fragment>
      <UserList />
      <UserInfoFull />
    </React.Fragment>
  );
};

export default App;
