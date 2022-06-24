import React from 'react';
import {View} from 'react-native';

import Header from './Component/Header';
import {homeScreenStyle} from './home-screen-style';
import ChipGroup from './Component/chipGroup/chipGroup-screen-view';
import Footer from './Component/Footer';
import ExpenseList from './Component/ExpenseList';

type click = () => void;
interface Props {
  onClick: click;
  totalIncome: number;
  totalExpense: number;
  totalSaving: number;
  expenseList: any;
}

/**
 *
 * @param onClick this method is responsible for navigating to another screen
 * @param totalIncome this is total income
 * @param totalExpense user total expense amount
 * @param totalSaving its getting total saving means totalIncome - totalExpense
 * @param expenseList array of objects of user expenses
 * @returns ui
 */
const HomeScreenView: React.FC<Props> = ({
  onClick,
  totalIncome,
  totalExpense,
  totalSaving,
  expenseList,
}) => {
  return (
    <View style={homeScreenStyle?.component}>
      <Header name="Their" />
      <ChipGroup income={totalIncome} expense={totalExpense} />
      <ExpenseList totalExpenses={expenseList} />
      <Footer onPress={onClick} totalSaving={totalSaving} />
    </View>
  );
};

export default HomeScreenView;
