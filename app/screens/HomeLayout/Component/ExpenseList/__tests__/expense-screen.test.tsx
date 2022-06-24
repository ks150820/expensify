import React from 'react';
import {render} from '../../../../../../testing/test-utils';
import ExpenseListScreen from '../expense-screen';

describe('expense-screen', () => {
  test('test component', () => {
    const props = {
      totalExpenses: [],
    };
    render(<ExpenseListScreen {...props} />);
  });
});
