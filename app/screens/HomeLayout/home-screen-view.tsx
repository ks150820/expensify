import React,{useEffect} from "react";
import { View } from "react-native";
import {useSelector} from "react-redux";

import Header from "./Component/Header";
import {homeScreenStyle} from "./Styles/home-screen-style";
import ChipGroup from "./Component/ChipGroup";
import Footer from "./Component/Footer";
import ExpenseList from "./Component/ExpenseList";
import {getExpensesList} from "../../store/entities/Income"

type Props = {
    onClick: () => void,
    totalIncome: number,
    totalExpense: number,
    totalSaving: number
}

const HomeScreenView: React.FC<Props> =  ({onClick,totalIncome, totalExpense,totalSaving}) => {
    const getExpenseData = useSelector(getExpensesList);

    return (
        <View style={homeScreenStyle?.component}>
            <Header name="Their" />
            <ChipGroup income={totalIncome} expense={totalExpense} />
            <ExpenseList totalExpenses={getExpenseData} />
            <Footer onPress={onClick} totalSaving={totalSaving} />
        </View>
    )
}

export default HomeScreenView;