import React from 'react';
import { shallow } from 'enzyme';
import Cover from './Cover';

describe('Cover', () => {
  describe('about render', () => {
    const wrapper = shallow(<Cover />);

    it('compare with snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
