import React from "react";
import { View } from "react-native";

import Chip from "./Chip";
import { chipGroupStyles } from "../Styles/chip-group-styles";

type ChipGroupProps = {
    income: number,
    expense: number
}

const ChipGroup: React.FC<ChipGroupProps> = ({income,expense}) => {
    return (
        <View style={chipGroupStyles.component}>
            <Chip title="income" rupees={income} iconName="arrow-up" color="#d0667a" bgColor="#e2a4ad" />
            <Chip title="expense" rupees={expense} iconName="arrow-down" color="#427846" bgColor="#84bb86" />
        </View>
    )
}

export default ChipGroup;