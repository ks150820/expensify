import { HomeProps } from "../../Navigation/@types/navigation-types";
import { totalIncome } from "../../common/totalIncome";

const useHomeScreenViewController = ({navigation}: HomeProps) => {

    const onPress = () => {
        if(navigation){
            navigation.navigate('AddExpense',{value: 'From Home'})
        }
    }

    const getTotalIncome = () => totalIncome();

    return { onPress, getTotalIncome };
}

export default useHomeScreenViewController;