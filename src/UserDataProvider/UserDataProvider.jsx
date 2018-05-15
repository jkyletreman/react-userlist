import React, { Component } from "react";
import UserData from "../context";
// const userData = require("../data/userData.json");

export default class UserDataProvider extends Component {
  constructor() {
    super();
    this.state = {
      selectedUser: "",
      userIsSelected: false,
      userData: [
        {
          id: 1,
          first: "John",
          last: "Roberts",
          age: 51,
          location: "Chicago, IL",
          description: "John is a retired YouTuber"
        },
        {
          id: 2,
          first: "Frita",
          last: "Waters",
          age: 27,
          location: "Phoenix, AZ",
          description: "Frita loves the desert, cheese, and turtles."
        },
        {
          id: 3,
          first: "Bart",
          last: "Simpson",
          age: 24,
          location: "Springfield, IL",
          description: "Bart skateboards everywhere."
        }
      ]
    };
  }

  selectUser = e => {
    this.setState({
      userIsSelected: true
    });
    this.setState({
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
          birthYear: this.calculateUserBirthYear
        }}
      >
        {this.props.children}
      </UserData.Provider>
    );
  }
}
