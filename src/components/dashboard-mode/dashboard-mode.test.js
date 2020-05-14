import React from 'react';
import { shallow } from 'enzyme';
import { DashboardMode } from './dashboard-mode.component';

describe('DashboardMode component', () => {
  const dashboardModeIsVisible = shallow(<DashboardMode mode={true} />);
  const dashboardModeNotVisible = shallow(<DashboardMode mode={false} />);

  test('should render DashboardMode component', () => {
    expect(dashboardModeIsVisible).toMatchSnapshot();
  });

  test('should render DashboardMode component', () => {
    expect(dashboardModeNotVisible).toMatchSnapshot();
  });
});
