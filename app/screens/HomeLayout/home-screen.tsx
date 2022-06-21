import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { HomeProps } from "../../Navigation/@types/navigation-types";

import useHomeScreenViewController from "./home-screen-view-model";
import HomeScreenView from "./home-screen-view";

interface IHomeScreen extends HomeProps {};

const HomeScreen: React.FC<IHomeScreen> = ({navigation,route}: HomeProps) => {

    const { onPress, getTotalIncome, getTotalExpense} = useHomeScreenViewController({navigation, route});
    return (
        <HomeScreenView onClick={onPress} totalIncome={getTotalIncome()} totalExpense={getTotalExpense()} />
    )
}

export default HomeScreen;