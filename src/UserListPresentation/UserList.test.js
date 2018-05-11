import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import UserList from './UserList'
import ShallowRenderer from 'react-test-renderer/shallow';

it('renders user shallow correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<UserList userData={userData} />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

const userData = [
  {
    id: 1,
    first: "John",
    last: "Roberts",
    age: 51,
    location: "Chicago, IL",
    description: "John is a retired YouTuber"
  },
  {
    id: 2,
    first: "Frita",
    last: "Waters",
    age: 27,
    location: "Phoenix, AZ",
    description: "Frita loves the desert, cheese, and turtles."
  },
  {
    id: 3,
    first: "Bart",
    last: "Simpson",
    age: 24,
    location: "Springfield, IL",
    description: "Bart skateboards everywhere."
  }
];
