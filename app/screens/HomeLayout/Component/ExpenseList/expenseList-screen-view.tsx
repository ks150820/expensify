import React from 'react';
import {FlatList, View, Text} from 'react-native';
import EmptyView from './emptyView-screen';

import {expenseStyle} from './Expense-List-style';

type Props = {
  totalExpenses: IItemProps[] | any;
};

/**
 * @param totalExpenses
 * @returns this component will show all the expenses added by the user
 */
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
      {totalExpenses.length == 0 ? (
        <EmptyView />
      ) : (
        <FlatList
          keyExtractor={(_item, index) => index + ''}
          testID={'flat-list'}
          data={totalExpenses}
          renderItem={({item}: {item: IItemProps}) => renderItem(item)}
        />
      )}
    </View>
  );
};

export default ExpenseListScreenView;
