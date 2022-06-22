import React from "react";
import { FlatList, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"

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

const ExpenseList: React.FC<Props> = ({ totalExpenses }) => {

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
                keyExtractor={(item, index) => index + ""}
                data={totalExpenses}
                renderItem={({ item }: { item: IItemProps }) => renderItem(item)}
                ListEmptyComponent={() => <View style={{ flex: 1, alignItems: "center", justifyContent: "center", alignSelf: "center", backgroundColor: "#e2a4ad", padding: 20, borderRadius: 10 }}>
                    <Text style={{ textAlign: "center",color: "#000" }}>Your Expense & income are zero, try to add <View style={{ backgroundColor: "#000", borderRadius: 30,padding: 3 }}><Icon name="add" style={{ fontSize: 10, color: "#fff" }} /></View> by pressing below black add button</Text>
                </View>}
            />
        </View>
    )
}

export default ExpenseList;