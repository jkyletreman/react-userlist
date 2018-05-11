import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import UserInfoFull from "./UserInfoFull";

configure({ adapter: new Adapter() });

const tree = shallow(<UserInfoFull birthYear={1989} selectedUser={{
      first: "kyle",
      last: "treman",
      location: "NY",
      description: "working"
    }}
  />
);
const instance = tree.getElement().props;

describe("<UserInfoFull />", () => {
  it("renders shallow correctly", () => {
    expect(toJson(tree)).toMatchSnapshot();
  });

  it("should render 5 li elements", () => {
    expect(tree.find('ul').children('li').length).toBe(5);
  });
});
