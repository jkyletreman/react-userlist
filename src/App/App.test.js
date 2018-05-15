import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserList from "../UserListPresentation/UserList";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
const userData = require("../data/userData.json");

configure({ adapter: new Adapter() });

describe("UserListcontainer", () => {
  let wrapper = mount(<App />);

  it("renders without crashing", () => {
    // console.log(wrapper.debug());
  });

  it('initializes `userIsSelected` as `false`', () => {
    expect(wrapper.state().userIsSelected).toBe(false)
  });

  it('initializes `userSelected` as ""', () => {
    expect(wrapper.state().userSelected).toEqual('')
  });

  it('renders 3 li elements', () => {
    expect(wrapper.find('li').length).toEqual(3);
  });

  // describe('on click of user', () => {
  //
  //   beforeEach(() => {
  //     wrapper.find('li').at(0).simulate('click')
  //   })
  //
  //   it("updates `userIsSelected` to `true`", () => {
  //     console.log(wrapper.debug());
  //     expect(wrapper.update().state().userIsSelected).toBe(true)
  //   })
  // })
})
