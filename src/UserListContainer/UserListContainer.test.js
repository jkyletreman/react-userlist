import React from "react";
import ReactDOM from "react-dom";
import UserListContainer from "./UserListContainer";
import UserList from "../UserListPresentation/UserList";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import ShallowRenderer from "react-test-renderer/shallow";

describe("<UserListContainer />", () => {
  it("renders user shallow correctly", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<UserListContainer />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  configure({ adapter: new Adapter() })

  it("should have a HOC ul with 3 li children", () => {
    const wrapper = shallow(<UserListContainer />)
    it('should have a ul with 3 children', () => {
      expect(wrapper.find('ul').dive().children().length).toBe(3);
    });
  });
});
