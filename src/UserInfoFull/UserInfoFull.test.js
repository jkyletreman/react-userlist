import React from "react";
import ReactDOM from "react-dom";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import UserInfoFull from "./UserInfoFull";
import {selectedUser} from '../data/fixtures'

configure({ adapter: new Adapter() });

const userinfofull = mount(<UserInfoFull birthYear={1989} selectedUser={selectedUser} />
);
const instance = userinfofull.getElement().props;

describe("<UserInfoFull />", () => {
  it("renders shallow correctly", () => {
    expect(toJson(userinfofull)).toMatchSnapshot();
  });

  it("has `selectedUser` as props", () => {
    expect(userinfofull.props().selectedUser).toEqual(selectedUser)
  });

  it("has `birthYear` as props", () => {
    expect(userinfofull.props().birthYear).toEqual(1989)
  });

  it("should render 5 li elements", () => {
    expect(userinfofull.find('ul').children('li').length).toBe(5);
  });
});
