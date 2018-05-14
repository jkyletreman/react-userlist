import React from "react";
import ReactDOM from "react-dom";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import UserList from "./UserList";
const userData = require("../userData.json");

configure({ adapter: new Adapter() })


describe("<UserList />", () => {
  const userlist = mount(<UserList userData={userData} />);

  it("renders shallow correctly", () => {
    expect(toJson(userlist)).toMatchSnapshot();
  });

  it('should accept `userData as props`', () => {
    expect(userlist.props().userData).toEqual(userData)
  });

  it("should render a ul with 3 li children", () => {
    expect(userlist.find('ul').children().length).toBe(3);
  });
});
