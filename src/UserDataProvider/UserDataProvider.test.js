// import React from "react";
// import Enzyme, { configure, mount, shallow } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import toJson from "enzyme-to-json";
// import UserDataProvider from "./UserDataProvider";
// import UserData from "../data/context";
// import UserList from "../UserList/UserList"
// const userData = require("../data/userData.json");
//
// configure({ adapter: new Adapter() });
//
// beforeEach(() => {
//   jest.resetModules();
// });
//
// const getProviderWithContext = (
//   context = { selectedUser: "", userIsSelected: false, userData: userData }
// ) => {
//   // Will then mock the UserData module being used in our LanguageSelector component
//   jest.doMock("../data/context", () => {
//     return {
//       UserData: {
//         Consumer: props => props.children(context)
//       }
//     };
//   });
//
//   // you need to re-require after calling jest.doMock.
//   // return the updated LanguageSelector module that now includes the mocked context
//   return require("../UserList/UserList").UserList;
// };
//
// describe("UserList", () => {
//   const UserList = getProviderWithContext({
//     selectedUser: "",
//     userIsSelected: false,
//     userData: userData
//   });
//   const provider = mount(<UserDataProvider />);
//   it("should render without crashing", () => {
//     console.log(UserDataProvider.debug());
//   });
// });
