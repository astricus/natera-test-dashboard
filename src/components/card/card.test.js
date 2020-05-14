import React from 'react';
import { shallow } from 'enzyme';
import Card from './card.component';

test('should render Card component', () => {
  expect(shallow(<Card isPost={true}>Post Card</Card>)).toMatchSnapshot();
});
