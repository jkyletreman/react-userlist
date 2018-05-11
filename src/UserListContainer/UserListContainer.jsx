import React, { Component } from "react";
import UserList from "../UserListPresentation/UserList";
import UserInfoFullContainer from "../UserInfoFullContainer/UserInfoFullContainer"

// would be under a componentDidMount() fetch call to an API
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

export default class UserListContainer extends Component {
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
    const selectedUserData = this.state.userIsSelected
      ? this.filterUserData(this.state.userSelected)
      : null;

    const additionalUserInfo = this.state.userIsSelected ? (
      <UserInfoFullContainer selectedUser={selectedUserData[0]} />
    ) : null;

    return (
      <div>
        <UserList userData={userData} handleClick={this.handleClick} />
        {additionalUserInfo}
      </div>
    );
  }
}
