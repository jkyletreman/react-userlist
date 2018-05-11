import React from "react";
import ReactDOM from "react-dom";
import UserListContainer from "./UserListContainer";
import UserList from "../UserListPresentation/UserList";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() })
const tree = shallow(<UserListContainer />);

describe("<UserListContainer />", () => {
  it("renders shallow correctly", () => {
    expect(toJson(tree)).toMatchSnapshot();
  });

  it("should have a HOC ul with 3 li children", () => {
    it('should have a ul with 3 children', () => {
      expect(tree.find('ul').dive().children().length).toBe(3);
    });
  });
});
