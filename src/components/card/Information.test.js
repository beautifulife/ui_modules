import React from 'react';
import { shallow } from 'enzyme';
import Information from './Information';

describe('Information', () => {
  describe('about render', () => {
    const wrapper = shallow(<Information />);

    it('compare with snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
