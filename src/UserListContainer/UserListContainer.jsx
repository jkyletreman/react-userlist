import React, { Component } from "react";
import UserList from "../UserListPresentation/UserList";
import UserInfoFull from "../UserInfoFullPresentation/UserInfoFull";
import UserData from "../context";
const userData = require("../data/userData.json");

export default class UserListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelected: "",
      userIsSelected: false
    };
  }

  // filterUserData = username => {
  //   return userData.filter(user => `${user.first} ${user.last}` === username);
  // };

  render() {
    // const selectedUserData = this.state.userIsSelected
    //   ? this.filterUserData(this.state.userSelected)
    //   : null;
    //
    // const additionalUserInfo = this.state.userIsSelected ? (
    //   <UserInfoFullContainer selectedUser={selectedUserData[0]} />
    // ) : null;

    return (
      <UserData.Consumer>
        {context => (
          <React.Fragment>
            <UserList
              userData={context.state.userData}
              selectUser={context.selectUser}
            />
            <UserInfoFull
              userData={context.state.userData}
              selectUser={context.state.userSelected}
            />
          </React.Fragment>
        )}
      </UserData.Consumer>
    );
  }
}
