import { useSelector } from "react-redux";
import { getIncomeList, getExpensesList } from "../store/entities/Income";

export const totalIncome = () => {

    const userIncomeDetails = useSelector(getIncomeList);

    let amount = 0;

    userIncomeDetails.forEach(element => {
        amount = amount + element?.amount
    });

    return amount;

}

export const totalExpense = () => {
    const userExpenseDetails = useSelector(getExpensesList);

    let amount = 0;

    userExpenseDetails.forEach(element => {
        amount = amount + element?.amount
    });

    return amount;
}