import React from "react";
import { View } from "react-native";
import Header from "./Component/Header";

import {homeScreenStyle} from "./Styles/home-screen-style";
import ChipGroup from "./Component/ChipGroup";
import Footer from "./Component/Footer";
import ExpenseList from "./Component/ExpenseList";

type Props = {
    onClick: any,
    totalIncome: any
}

const HomeScreenView: React.FC<Props> =  ({onClick,totalIncome}) => {    

    return (
        <View style={homeScreenStyle?.component}>
            <Header name="Kapil Shukla" />
            <ChipGroup income={totalIncome} />
            <ExpenseList />
            <Footer onPress={onClick} />
        </View>
    )
}

export default HomeScreenView;