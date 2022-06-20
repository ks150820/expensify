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
    categoryName: string,
    amount: number,
    id: number
}
const ExpenseList: React.FC<{}> = () => {

    const renderItem = (item: IItemProps) => {
        return (
            <View style={expenseStyle.listComponent}>
                <Text style={expenseStyle.text}>{item.categoryName}</Text>
                <Text style={expenseStyle.text}>₹ {item.amount}</Text>
            </View>
        )
    }

    return (
        <View style={expenseStyle?.component}>
            <FlatList
                keyExtractor={item => item.id + ""}
                data={array}
                renderItem={({ item }: { item: IItemProps }) => renderItem(item)}
            />
        </View>
    )
}

export default ExpenseList;