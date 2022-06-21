import { HomeProps } from "../../Navigation/@types/navigation-types";
import { totalIncome, totalExpense } from "../../common/totalAmounts";

const useHomeScreenViewController = ({navigation}: HomeProps) => {

    const onPress = () => {
        if(navigation){
            navigation.navigate('AddExpense',{value: 'From Home'})
        }
    }

    const getTotalIncome = () => totalIncome();
    const getTotalExpense = () => totalExpense();

    return { onPress, getTotalIncome, getTotalExpense };
}

export default useHomeScreenViewController;