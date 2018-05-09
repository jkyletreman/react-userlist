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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelected: ""
    };
  }

  handleClick = e => {
    this.setState({
      userSelected: e.target.innerText
    });
  };

  render() {
    const selectedUser = this.state.userSelected;

    return (
      <div>
        {userData.map(user => (
          <ul>
            <li key={user.id} onClick={this.handleClick}>
              {user.first} {user.last}
            </li>
          </ul>
        ))}
        <UserInfoFull selectedUser={selectedUser} />
      </div>
    );
  }
}

const UserInfoFull = ({ selectedUser }) => {
  return userData.map(user => {
    if (`${user.first} ${user.last}` === selectedUser) {
      return (
        <div>
          <h2>
            Selected User {user.first} {user.last}
          </h2>
          <ul>
            <li>{user.age}</li>
            <li>{user.location}</li>
            <li>{user.description}</li>
          </ul>
        </div>
      );
    }
  });
};

export default App;
