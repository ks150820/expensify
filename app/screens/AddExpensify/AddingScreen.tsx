import React from "react";
import {View,Text} from "react-native";
import { AddExpenseProps } from "../../Navigation/@types/navigation-types";
import ExpensifyView from './expensify-view';
import useExpensifyAddingViewController from "./expensify-view-model";

interface IAddExpenseScreen extends AddExpenseProps {};

const AddingScreeen: React.FC<IAddExpenseScreen> = ({navigation,route}: AddExpenseProps) => {
    const { onPress } = useExpensifyAddingViewController({navigation,route});
    return (
        <ExpensifyView onClick={onPress} />
    );
}

export default AddingScreeen;