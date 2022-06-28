import React from 'react';
import {render} from '../../../../../../testing/test-utils';
import ExpenseListScreenView from '../expenseList-screen-view';

describe('expenseList-screen-view', () => {
  test('test component', () => {
    const props = {
      totalExpenses: [
        {
          type: 'Food',
          amount: 300,
        },
      ],
    };
    render(<ExpenseListScreenView {...props} />);
  });
  test('test component when list is empty', () => {
    const props = {
      totalExpenses: [],
    };
    const {getByText} = render(<ExpenseListScreenView {...props} />);

    expect(getByText(/Your Expense are zero/i).props.children);
  });
});
