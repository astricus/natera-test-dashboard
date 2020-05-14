import React from 'react';
import { shallow } from 'enzyme';
import ButtonInline from './button-inline.component';

test('should render ButtonInline component', () => {
  expect(shallow(<ButtonInline>Click me!</ButtonInline>)).toMatchSnapshot();
});
