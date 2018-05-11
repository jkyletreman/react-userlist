import React from "react";
import ReactDOM from "react-dom";
import UserList from "./UserList";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("<UserList />", () => {
  const wrapper = shallow(<UserList />);
  it("should have a ul with 3 children", () => {
    expect(wrapper.find("ul").children().length).toBe(3);
  });
});
