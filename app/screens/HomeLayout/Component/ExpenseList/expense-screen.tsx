import React from 'react';

import ExpenseListScreenView from './expenseList-screen-view';

type Props = {
  totalExpenses: IItemProps[] | any;
};

const ExpenseListScreen: React.FC<Props> = totalExpenses => {
  return <ExpenseListScreenView totalExpenses={totalExpenses} />;
};

export default ExpenseListScreen;
