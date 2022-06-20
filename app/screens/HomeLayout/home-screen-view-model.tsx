import { HomeProps } from "../../Navigation/@types/navigation-types";

const useHomeScreenViewController = ({navigation}: HomeProps) => {

    const onPress = () => {
        if(navigation){
            navigation.navigate('AddExpense',{value: 'From Home'})
        }
    }

    return { onPress };
}

export default useHomeScreenViewController;