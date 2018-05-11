import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import UserList from "./UserList";
const userData = require("../userData.json");

configure({ adapter: new Adapter() })

const tree = shallow(<UserList userData={userData} />);

describe("<UserList />", () => {

  it("renders shallow correctly", () => {
    expect(toJson(tree)).toMatchSnapshot();
  });

  it("should render a ul with 3 li children", () => {
    expect(tree.find('ul').children().length).toBe(3);
  });
});
