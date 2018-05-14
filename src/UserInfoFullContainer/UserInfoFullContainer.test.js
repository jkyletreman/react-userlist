import React from "react";
import ReactDOM from "react-dom";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import UserInfoFullContainer from "./UserInfoFullContainer";

configure({ adapter: new Adapter() });

const userinfofull = mount(<UserInfoFullContainer selectedUser={{ age: 24 }} />);

describe("<UserInfoFull />", () => {
  it("renders shallow correctly", () => {
    // console.log(userinfofull.debug())
    expect(toJson(userinfofull)).toMatchSnapshot();
  });

  it("calculateUserBirthYear return correctly", () => {
    const toReturn = userinfofull.instance().calculateUserBirthYear();
    expect(toReturn).toBe(1994)
  })
});
