import React from 'react';
import { shallow } from 'enzyme';
import Rating from './Rating';

describe('Rating', () => {
  describe('about render', () => {
    const wrapper = shallow(<Rating />);

    it('compare with snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('render horizontal when cardType is horizontal', () => {
      wrapper.setProps({ type: 'horizontal' });
      expect(wrapper.find('.Rating.horizontal').length).toBe(1);
    });
  });
});
