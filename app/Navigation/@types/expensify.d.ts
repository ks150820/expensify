interface expense {
  type: String;
  amount: number;
}

interface income {
  type: String;
  amount: number;
}

interface ExpensifyType {
  expenses: expense[];
  income: income[];
}

interface incomeReducer {
  incomeReducer: ExpensifyType;
}

interface State {
  entities: incomeReducer;
}
