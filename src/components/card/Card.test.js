import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  describe('about render', () => {
    const wrapper = shallow(<Card />);

    it('compare with snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('render horizontal when cardType is horizontal', () => {
      wrapper.setProps({ cardType: 'horizontal' });
      expect(wrapper.find('.Card.horizontal').length).toBe(1);
    });
  });
});
