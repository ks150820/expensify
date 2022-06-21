import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { AddExpenseProps } from "../../Navigation/@types/navigation-types";
import { updateIncome,updateExpense } from "../../store/entities/Income";

const useExpensifyAddingViewController = ({navigation,route}: AddExpenseProps) => {

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
    }

    return { onPress };
}

export default useExpensifyAddingViewController;