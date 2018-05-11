import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import UserList from './UserList'
import ShallowRenderer from 'react-test-renderer/shallow';
const userData = require("../userData.json");

it('renders user shallow correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<UserList userData={userData} />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
