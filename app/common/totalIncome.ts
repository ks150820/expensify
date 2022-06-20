import { iteratorSymbol } from "immer/dist/internal";
import { useSelector } from "react-redux";
import { getIncomeList } from "../store/entities/Income";

export const totalIncome = () => {

    const userIncomeDetails = useSelector(getIncomeList);

    let amount = 0;

    userIncomeDetails.forEach(element => {
        amount = amount + element?.amount
    });

    return amount;

}
