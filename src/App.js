import React, { Component } from "react";

const userData = [
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
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelected: "",
      userIsSelected: false
    };
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
    const selectedUser = this.state.userSelected;

    const selectedUserData = this.state.userIsSelected ? (
      this.filterUserData(selectedUser)
    ) : (
      null
    )

    const additionalUserInfo = this.state.userIsSelected ? (
      <UserInfoFull selectedUser={selectedUserData} />
    ) : (
      console.log(false)
    )

    return (
      <div>
        <UserList userData={userData} handleClick={this.handleClick} />
        {additionalUserInfo}
      </div>
    );
  }
}

const UserList = ({ userData, selectedUser, handleClick }) => {
  return (
    <ul>
      {userData.map(user => (
        <li key={user.id} onClick={handleClick}>
          {user.first} {user.last}
        </li>
      ))}
    </ul>
  );
};

const UserInfoFull = ({ first, last, age, location, description }) => {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  const YOB = year - age;

  return (
    <div>
      <h2>
        Selected User {first} {last}
      </h2>
      <ul>
        <li>{YOB}</li>
        <li>{location}</li>
        <li>{description}</li>
      </ul>
    </div>
  );
};
