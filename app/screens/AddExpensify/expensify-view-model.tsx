import {useDispatch} from 'react-redux';
import {AddExpenseProps} from '../../Navigation/@types/navigation-types';
import {updateIncome, updateExpense} from '../../store/entities/Income';

const useExpensifyAddingViewController = ({navigation}: AddExpenseProps) => {
  const dispatch: any = useDispatch();

  const onPress = (activeTab: Number, objectValue: income) => {
    // 1 means incomeTab, 2 means expense tab
    if (activeTab === 1) {
      dispatch(updateIncome(objectValue));
    } else {
      // add expense code here
      dispatch(updateExpense(objectValue));
    }
    navigation.goBack();
  };

  return {onPress};
};

export default useExpensifyAddingViewController;
