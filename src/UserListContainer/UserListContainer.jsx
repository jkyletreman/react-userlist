import React, { Component } from "react";
import UserList from "../UserListPresentation/UserList";
import UserInfoFullContainer from "../UserInfoFullContainer/UserInfoFullContainer"

const userData = require("../data/userData.json");

export default class UserListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelected: "",
      userIsSelected: false
  }
}

  handleClick = e => {
    this.setState({
      userSelected: e.target.innerText,
      userIsSelected: true
    });
  };

  filterUserData = username => {
    return userData.filter(user => `${user.first} ${user.last}` === username);
  };

  render() {
    const selectedUserData = this.state.userIsSelected
      ? this.filterUserData(this.state.userSelected)
      : null;

    const additionalUserInfo = this.state.userIsSelected
      ? <UserInfoFullContainer selectedUser={selectedUserData[0]} />
      : null;

    return (
      <div>
        <UserList userData={userData} handleClick={this.handleClick} />
        {additionalUserInfo}
      </div>
    );
  }
}
