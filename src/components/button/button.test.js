import React from 'react';
import { shallow } from 'enzyme';
import Button from './button.component';

test('should render primary Button component', () => {
  expect(shallow(<Button primary={true}>Click me!</Button>)).toMatchSnapshot();
});
