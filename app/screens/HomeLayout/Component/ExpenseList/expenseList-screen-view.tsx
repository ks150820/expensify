import React from 'react';
import {FlatList, View, Text} from 'react-native';

import {expenseStyle} from './Expense-List-style';
import EmptyView from './emptyView-screen';

type Props = {
  totalExpenses: IItemProps[] | any;
};

const ExpenseListScreenView: React.FC<Props> = ({totalExpenses}) => {
  const renderItem = (item: IItemProps) => {
    return (
      <View style={expenseStyle.listComponent}>
        <Text style={expenseStyle.text}>{item.type}</Text>
        <Text style={expenseStyle.text}>₹ {item.amount}</Text>
      </View>
    );
  };

  return (
    <View style={expenseStyle?.component}>
      <FlatList
        keyExtractor={(__item, index) => index + ''}
        data={totalExpenses}
        renderItem={({item}: {item: IItemProps}) => renderItem(item)}
        ListEmptyComponent={() => <EmptyView />}
      />
    </View>
  );
};

export default ExpenseListScreenView;
