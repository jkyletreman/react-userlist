import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import UserInfoFullContainer from './UserInfoFullContainer'
import ShallowRenderer from 'react-test-renderer/shallow';

it('renders user shallow correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<UserInfoFullContainer selectedUser={{age: 24}} />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
