import {act, waitFor} from '@testing-library/react-native';
import {renderHook} from '../../../../testing/test-utils';
import {store} from '../../configureStore';
import {
  updateIncome,
  updateExpense,
  getExpensesList,
  getIncomeList,
  getTotalExpenseAmount,
  getTotalIncomeAmount,
} from '../Income';

describe('Income', () => {
  test('Dispatches action to update income', () => {
    renderHook(
      updateIncome,
      {},
      {
        entities: {
          incomeReducer: {
            income: [],
            expenses: [],
          },
        },
      },
    );
    store.subscribe(() => {
      const expensify: ExpensifyType = store.getState().entities.incomeReducer;
      expect(expensify.income).toStrictEqual([{type: 'salary', amount: 2000}]);
    });
    act(() => {
      store.dispatch(updateIncome({type: 'salary', amount: 2000}));
    });
  });
  test('Dispatches action to update expense', () => {
    renderHook(
      updateExpense,
      {},
      {
        entities: {
          incomeReducer: {
            income: [],
            expenses: [],
          },
        },
      },
    );
    store.subscribe(() => {
      const expensify: ExpensifyType = store.getState().entities.incomeReducer;
      expect(expensify.expenses).toStrictEqual([{type: 'Food', amount: 100}]);
    });
    act(() => {
      store.dispatch(updateExpense({type: 'Food', amount: 100}));
    });
  });
  test('Dispatches action to update expense again', () => {
    renderHook(
      updateExpense,
      {},
      {
        entities: {
          incomeReducer: {
            income: [],
            expenses: [],
          },
        },
      },
    );
    store.subscribe(() => {
      const expensify: ExpensifyType = store.getState().entities.incomeReducer;
      expect(expensify.expenses).toStrictEqual([{type: 'Food', amount: 200}]);
    });
    waitFor(() => {
      store.dispatch(updateExpense({type: 'Food', amount: 100}));
    });
  });
  test('test getExpensesList method', () => {
    const mockStore = {
      entities: {
        incomeReducer: {
          expenses: [
            {
              type: 'Food',
              amount: 200,
            },
          ],
          income: [],
        },
      },
    };
    const response = getExpensesList(mockStore);
    expect(response).toStrictEqual([{type: 'Food', amount: 200}]);
  });
  test('test getIncomeList method', () => {
    const mockStore = {
      entities: {
        incomeReducer: {
          expenses: [],
          income: [
            {
              type: 'salary',
              amount: 100000,
            },
          ],
        },
      },
    };
    const response = getIncomeList(mockStore);
    expect(response).toStrictEqual([{type: 'salary', amount: 100000}]);
  });
  test('test getTotalExpenseAmount method if expenses are available', () => {
    const mockStore = {
      entities: {
        incomeReducer: {
          expenses: [
            {
              type: 'Food',
              amount: 200,
            },
          ],
          income: [],
        },
      },
    };
    const response = getTotalExpenseAmount(mockStore);
    expect(response).toStrictEqual(200);
  });
  test('test getTotalExpenseAmount method if expenses are not available', () => {
    const mockStore = {
      entities: {
        incomeReducer: {
          expenses: [],
          income: [],
        },
      },
    };
    const response = getTotalExpenseAmount(mockStore);
    expect(response).toStrictEqual(0);
  });
  test('test getTotalIncomeAmount method if income is available', () => {
    const mockStore = {
      entities: {
        incomeReducer: {
          expenses: [],
          income: [
            {
              type: 'salary',
              amount: 100000,
            },
          ],
        },
      },
    };
    const response = getTotalIncomeAmount(mockStore);
    expect(response).toStrictEqual(100000);
  });
  test('test getTotalIncomeAmount method if income is notavailable', () => {
    const mockStore = {
      entities: {
        incomeReducer: {
          expenses: [],
          income: [],
        },
      },
    };
    const response = getTotalIncomeAmount(mockStore);
    expect(response).toStrictEqual(0);
  });
});
