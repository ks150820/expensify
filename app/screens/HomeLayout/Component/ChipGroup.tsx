import React from "react";
import { View } from "react-native";

import Chip from "./Chip";
import { chipGroupStyles } from "../Styles/chip-group-styles";

type ChipGroupProps = {
    income: number
}

const ChipGroup: React.FC<ChipGroupProps> = ({income}) => {
    return (
        <View style={chipGroupStyles.component}>
            <Chip title="income" rupees={income} iconName="arrow-up" color="#d0667a" bgColor="#e2a4ad" />
            <Chip title="expense" rupees={300} iconName="arrow-down" color="#427846" bgColor="#84bb86" />
        </View>
    )
}

export default ChipGroup;