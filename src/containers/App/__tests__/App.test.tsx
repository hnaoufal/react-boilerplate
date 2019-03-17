import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';

import toJson from 'enzyme-to-json';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the Snapshot', () => {
    const element = shallow(<App />);

    expect(toJson(element)).toMatchSnapshot();
  })
});