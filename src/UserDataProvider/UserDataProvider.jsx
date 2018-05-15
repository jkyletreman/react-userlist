import React, { Component } from "react";
import UserData from "../data/context";
const userData = require("../data/userData.json");

export default class UserDataProvider extends Component {
  constructor() {
    super();
    this.state = {
      selectedUser: "",
      userIsSelected: false,
      userData: userData,
      additionalInfo: null,
      birthYear: null
    };
  }

  selectUser = e => {
    const userIsSelected = true
    const selectedUser = e.target.innerText
    const additionalInfo =  this.filterUserData(selectedUser);
    const birthYear = this.calculateUserBirthYear(additionalInfo.age);
    this.setState({
      userIsSelected,
      selectedUser,
      additionalInfo,
      birthYear
    })
  };

  filterUserData = username => {
    const selectedUser = this.state.userData.filter(
      user => `${user.first} ${user.last}` === this.state.selectedUser
    );
    return selectedUser
  };

  calculateUserBirthYear = age => {
    const currentTime = new Date();
    const year = currentTime.getFullYear();
    return year - age
  };

  render() {
    return (
      <UserData.Provider
        value={{
          state: this.state,
          selectUser: this.selectUser
        }}
      >
        {this.props.children}
      </UserData.Provider>
    );
  }
}
