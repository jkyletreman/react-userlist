import React, { Component } from "react";
import UserData from "../context";
const userData = require("../data/userData.json");

export default class UserDataProvider extends Component {
  constructor() {
    super();
    this.state = {
      selectedUser: "",
      userIsSelected: false,
      userData: userData,
      additionalInfo: [],
      birthYear: null;
    };
  }

  selectUser = e => {
    this.setState({
      userIsSelected: true,
      selectedUser: e.target.innerText
    });
  };

  filterUserData = username => {
    const selectedUser = this.state.userData.filter(
      user => `${user.first} ${user.last}` === this.state.selectedUser
    );
    return selectedUser;
  };

  calculateUserBirthYear = () => {
    const currentTime = new Date();
    const year = currentTime.getFullYear();
    return year - this.state.additionalInfo.age;
  };

  render() {
    return (
      <UserData.Provider
        value={{
          state: this.state,
          selectUser: this.selectUser,
        }}
      >
        {this.props.children}
      </UserData.Provider>
    );
  }
}
