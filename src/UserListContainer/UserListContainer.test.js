import React from 'react';
import ReactDOM from 'react-dom';
import UserListContainer, { UserInfoFull } from './UserListContainer';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() })

describe("<App />", () => {
  const wrapper = shallow(<App />)
  it('should render App', () => {
    // console.log(wrapper.debug())
  });
  it('should have a ul with 3 children', () => {
    expect(wrapper.find('ul').children().length).toBe(3);
  });
  it('matches the snapshot', () => {
    const tree = shallow(<App />)
    expect(toJson(tree)).toMatchSnapshot();
  });
});


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });