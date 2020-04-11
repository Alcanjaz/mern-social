import React from 'react';
import {mount} from 'enzyme';
import IndexPage from '../../pages/index';

describe('Index Page', () => {
  test('should render correctly', () => {
    const result = mount(<IndexPage/>);
    expect(result.find('h1').text()).toBe('Hello Next.js');
  });
});