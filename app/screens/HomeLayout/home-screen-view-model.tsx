import {useSelector} from 'react-redux';

import {HomeProps} from '../../Navigation/@types/navigation-types';
import {
  getTotalIncomeAmount,
  getTotalExpenseAmount,
} from '../../store/entities/Income';

const useHomeScreenViewController = ({navigation}: HomeProps) => {
  const totalIncome = useSelector(getTotalIncomeAmount);
  const totalExpense = useSelector(getTotalExpenseAmount);

  const onPress = () => {
    if (navigation) {
      navigation.navigate('AddExpense', {value: 'From Home'});
    }
  };

  const getTotalIncome: number = totalIncome;
  const getTotalExpense: number = totalExpense;
  const saving: number = totalIncome - totalExpense;

  return {onPress, getTotalIncome, getTotalExpense, saving};
};

export default useHomeScreenViewController;
