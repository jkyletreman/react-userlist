import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import UserInfoFull from "./UserInfoFull";

configure({ adapter: new Adapter() });

describe("<UserInfoFull />", () => {
  it("renders shallow correctly", () => {
    const tree = shallow(
      <UserInfoFull
        birthYear={1989}
        selectedUser={{
          first: "kyle",
          last: "treman",
          location: "NY",
          description: "working"
        }}
      />
    );
    expect(toJson(tree)).toMatchSnapshot();
  });
});
