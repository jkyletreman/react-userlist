import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import UserInfoFull from "./UserInfoFull";
import ShallowRenderer from "react-test-renderer/shallow";

it("renders user shallow correctly", () => {
  const renderer = new ShallowRenderer();
  renderer.render(
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
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
