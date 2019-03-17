import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../Reviews';

import toJson from 'enzyme-to-json';

describe('App', () => {
  it('should match the Snapshot', () => {
    const element = shallow(<App />);

    expect(toJson(element)).toMatchSnapshot();
  })
});