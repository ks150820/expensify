import React from 'react';

import ExpenseListScreenView from './expenseList-screen-view';

type Props = {
  totalExpenses: IItemProps[] | any;
};

/**
 * @param totalExpenses
 * @returns it will return the expense screen list component, where all the expenses will show added by the user
 */
const ExpenseListScreen: React.FC<Props> = totalExpenses => {
  return <ExpenseListScreenView totalExpenses={totalExpenses} />;
};

export default ExpenseListScreen;
