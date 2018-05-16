import { calculateBirthYear, selectUser } from "../UserDataProvider/UserDataProvider"
const userData = require("../data/userData.json");

export const selectedUser = [
  {
    first: "kyle",
    last: "treman",
    location: "NY",
    description: "working"
  }
];

export const context = {
  state: {
    selectedUser: "",
    userIsSelected: false,
    userData: userData,
  }
}
