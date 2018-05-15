import React, { Component } from "react";
import UserList from "../UserList/UserList";
import UserInfoFull from "../UserInfoFull/UserInfoFull";
import UserData from "../context";

const App = () => {
  return (
    <UserData.Consumer>
      {context =>
        context.state.userIsSelected ? (
          <React.Fragment>
            <UserList
              userData={context.state.userData}
              selectUser={context.selectUser}
            />
            <UserInfoFull additionalInfo={context.state.additionalInfo} />
          </React.Fragment>
        ) : (
          <UserList
            userData={context.state.userData}
            selectUser={context.selectUser}
          />
        )
      }
    </UserData.Consumer>
  );
};

export default App
