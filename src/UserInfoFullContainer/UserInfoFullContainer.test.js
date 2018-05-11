import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import UserInfoFullContainer from "./UserInfoFullContainer";

configure({ adapter: new Adapter() });

describe("<UserInfoFull />", () => {
  it("renders shallow correctly", () => {
    const tree = shallow(<UserInfoFullContainer selectedUser={{ age: 24 }} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
