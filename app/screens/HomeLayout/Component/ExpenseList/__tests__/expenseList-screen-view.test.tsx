import React from 'react';
import {render} from '../../../../../../testing/test-utils';
import ExpenseListScreenView from '../expenseList-screen-view';

describe('expenseList-screen-view', () => {
  test('test component', () => {
    const props = {
      totalExpenses: [],
    };
    render(<ExpenseListScreenView {...props} />);
  });
});
