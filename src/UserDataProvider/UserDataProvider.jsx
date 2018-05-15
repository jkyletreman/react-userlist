import React, { Component } from "react";
import UserData from "../context";
// const userData = require("../data/userData.json");

export default class UserDataProvider extends Component {
  constructor() {
    super();
    this.state = {
      userSelected: "",
      birthYear: null,
      userIsSelected: false,
      additionalInfo: null,
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
      userSelected: e.target.innerText
    });
    this.setUserData();
  };

  setUserData = async () => {
    const additionalInfo = await this.filterUserData(this.state.userSelected);
    this.setState({ additionalInfo: additionalInfo });
    const birthYear = await this.calculateUserBirthYear(
      this.state.additionalInfo.age
    );
    this.setState({ birthYear: birthYear });
  };

  filterUserData = username => {
    const selectedUser = this.state.userData.filter(
      user => `${user.first} ${user.last}` === this.state.userSelected
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
          additionalInfo: this.filterUserData,
          birthYear: this.calculateUserBirthYear
        }}
      >
        {this.props.children}
      </UserData.Provider>
    );
  }
}
