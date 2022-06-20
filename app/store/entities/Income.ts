import {createSlice} from '@reduxjs/toolkit';
import {Dispatch} from 'redux';
import {createSelector} from 'reselect';

const expensifySlice = createSlice({
  name: 'expensify',
  initialState: <ExpensifyType>{
    total_expenses: 15,
    total_savings: 0,
    expenses: [],
    income: [],
  },
  reducers: {
    addIncome: (data: ExpensifyType, action) => {
      data.income.push(action.payload);
    },
    addExpense: (data: ExpensifyType, action) => {
      let {expenses} = action.payload;
      data.expenses.push(expenses);
    },
    updateTotalSavings: (data: ExpensifyType, action) => {
      let {total_savings} = action.payload;
      data.total_savings = total_savings;
    },
    updateTotalExpenses: (data: ExpensifyType, action) => {
      let {total_expenses} = action.payload;
      data.total_expenses = total_expenses;
    },
  },
});

const {addIncome} = expensifySlice.actions;

export default expensifySlice.reducer;

//define selector
export const getExpensesList = createSelector(
  (state: State) => state.entities.incomeReducer,
  expensify => expensify.expenses,
);

export const getIncomeList = createSelector(
  (state: State) => state.entities.incomeReducer,
  expensify => expensify.income,
);

export const getTotalSaving = createSelector(
  (state: State) => state.entities.incomeReducer,
  expensify => expensify.total_savings,
);

export const getTotalExpense = createSelector(
  (state: State) => state.entities.incomeReducer,
  expensify => expensify.total_expenses,
);

// action

export const updateUserName = (data: income) => (dispatch: Dispatch) => {
  return dispatch({type: addIncome.type, payload: data});
};
