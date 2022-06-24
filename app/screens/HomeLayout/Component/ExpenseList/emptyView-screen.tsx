import React from 'react';
import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {expenseStyle} from './Expense-List-style';

// this component is used to show empty screen text,
const EmptyView: React.FC<{}> = () => {
  return (
    <View style={expenseStyle.emptyBoxComponent}>
      <Text style={expenseStyle.emptyText}>
        Your Expense are zero, try to add by pressing below black add{' '}
        <View style={expenseStyle.iconComponent}>
          <Icon name="add" style={expenseStyle.iconStyle} />
        </View>{' '}
        button
      </Text>
    </View>
  );
};

export default EmptyView;
