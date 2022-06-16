import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

export interface incomeState {
    totalIncome : number
}

const initialState: incomeState = {
    totalIncome: 0
}

export const slice = createSlice({
    name: "incomes",
    initialState,
    reducers: {
        increment: (action,payload) => {}
    }
});

const { increment } = slice.actions;
export default slice.reducer;