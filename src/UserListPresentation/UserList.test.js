import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import UserList from "./UserList";
import ShallowRenderer from "react-test-renderer/shallow";
const userData = require("../userData.json");

describe("<UserList />", () => {
  configure({ adapter: new Adapter() })

  it("renders shallow correctly", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<UserList userData={userData} />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
  it("should render a ul with 3 li children", () => {
    const wrapper = shallow(<UserList userData={userData} />);
    expect(wrapper.find('ul').children().length).toBe(3);
  })
});
