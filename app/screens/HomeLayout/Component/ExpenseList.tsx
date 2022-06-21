import React from "react";
import { FlatList, View, Text } from "react-native";

import { expenseStyle } from "../Styles/Expense-List-style";

const array = [{
    categoryName: "Food",
    amount: 200,
    id: 1
},
{
    categoryName: "Travel",
    amount: 300,
    id: 2
}];
interface IItemProps {
    type: string,
    amount: number,
}

type Props = {
    totalExpenses: IItemProps[] | any
}

const ExpenseList: React.FC<Props> = ({totalExpenses}) => {

    const renderItem = (item: IItemProps) => {
        return (
            <View style={expenseStyle.listComponent}>
                <Text style={expenseStyle.text}>{item.type}</Text>
                <Text style={expenseStyle.text}>₹ {item.amount}</Text>
            </View>
        )
    }

    return (
        <View style={expenseStyle?.component}>
            <FlatList
                keyExtractor={(item,index) => index+ ""}
                data={totalExpenses}
                renderItem={({ item }: { item: IItemProps }) => renderItem(item)}
            />
        </View>
    )
}

export default ExpenseList;