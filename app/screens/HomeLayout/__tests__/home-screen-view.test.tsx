import {fireEvent} from '@testing-library/react-native';
import React from 'react';
import {render} from '../../../../testing/test-utils';
import HomeScreenView from '../home-screen-view';

describe('home-screen-view', () => {
  test('test home screen component', () => {
    const props = {
      onClick: jest.fn(),
      totalIncome: 300,
      totalSaving: 400,
      expenseList: [],
      totalExpense: 30,
    };
    const {getByText} = render(<HomeScreenView {...props} />);

    expect(getByText('Their').props.children).toBe('Their');
  });
  test('test footer onPress method', () => {
    const props = {
      onClick: jest.fn(),
      totalIncome: 400,
      totalSaving: -1,
      expenseList: [],
      totalExpense: 40,
    };
    const {getByTestId} = render(<HomeScreenView {...props} />);

    const node = getByTestId('onPressButton');
    expect(node).toBeTruthy();
    fireEvent.press(node);
  });
});
