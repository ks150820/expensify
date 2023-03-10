import React from 'react';
import {HomeProps} from '../../Navigation/@types/navigation-types';

import useHomeScreenViewController from './home-screen-view-model';
import HomeScreenView from './home-screen-view';

interface IHomeScreen {
  navigation: any;
  route: any;
}

/**
 * @param navigation a method responsible for navigation
 * @returns
 */
const HomeScreen: React.FC<IHomeScreen> = ({navigation, route}: HomeProps) => {
  const {onPress, getTotalIncome, getTotalExpense, saving, expenseList} =
    useHomeScreenViewController({navigation, route});

  return (
    <HomeScreenView
      onClick={onPress}
      totalIncome={getTotalIncome}
      totalExpense={getTotalExpense}
      totalSaving={saving}
      expenseList={expenseList}
    />
  );
};

export default HomeScreen;
