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
  total_savings: Number;
  total_expenses: Number;
}

interface incomeReducer {
    incomeReducer: ExpensifyType
}

interface State {
    entities: incomeReducer
}