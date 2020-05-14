import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './header.component';

describe('Header component', () => {
  const mockSetMode = jest.fn();
  const mode = true;
  const mockProps = {
    mode: mode,
    setMode: mockSetMode,
  };

  const headerWrapper = shallow(<Header {...mockProps} />);

  test('should render Header component', () => {
    expect(headerWrapper).toMatchSnapshot();
  });

  test('should call setMode when Edit Mode button is clicked', () => {
    headerWrapper.find('button').at(1).simulate('click');
    expect(mockSetMode).toHaveBeenCalled();
  });
});
