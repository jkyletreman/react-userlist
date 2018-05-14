import React from "react";
import ReactDOM from "react-dom";
import UserListContainer from "./UserListContainer";
import UserList from "../UserListPresentation/UserList";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
const userData = require("../userData.json");

configure({ adapter: new Adapter() });
const wrapper = mount(<UserListContainer />);

describe("UserListcontainer", () => {
  it("renders without crashing", () => {
    console.log(wrapper.debug());
  });

  it('initializes `userIsSelected` as `false`', () => {
    expect(wrapper.state().userIsSelected).toBe(false)
  });

  it('initializes `userSelected` as ""', () => {
    expect(wrapper.state().userSelected).toEqual('')
  })

  describe('on click of user', () => {

    beforeEach(() => {
      wrapper.find('li').at[0].simulate('click')
    })

    it("updates `userIsSelected` to `true`", () => {
      expect(wrapper.state().userIsSelected).toBe(true)
    })
  })
})
