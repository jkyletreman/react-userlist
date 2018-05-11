import React, { Component } from "react";
import UserInfoFull from "../UserInfoFullPresentation/UserInfoFull";

export default class UserInfoFullContainer extends Component {

  calculateUserBirthYear = () => {
    const currentTime = new Date();
    const year = currentTime.getFullYear();
    return year - this.props.selectedUser.age;
  };

  render() {
    return (
      <UserInfoFull
        selectedUser={this.props.selectedUser}
        birthYear={this.calculateUserBirthYear()}
      />
    );
  }
}
