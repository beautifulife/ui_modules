import React from 'react';
import { shallow } from 'enzyme';
import InputForm from './InputForm';

describe('InputForm', () => {
  describe('about render', () => {
    const wrapper = shallow(<InputForm />);

    it('compare with snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
