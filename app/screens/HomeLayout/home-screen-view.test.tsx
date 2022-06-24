import React from 'react';
import {render} from '../../../testing/test-utils';
import HomeScreenView from './home-screen-view';

describe('home-screen-view', () => {
  test('should ', () => {
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
});
