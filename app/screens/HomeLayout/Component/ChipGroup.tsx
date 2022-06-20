import React from "react";
import { View } from "react-native";

import Chip from "./Chip";
import { chipGroupStyles } from "../Styles/chip-group-styles";

const ChipGroup: React.FC<{}> = () => {
    return (
        <View style={chipGroupStyles.component}>
            <Chip title="income" rupees={200} iconName="arrow-up" color="#d0667a" bgColor="#e2a4ad" />
            <Chip title="expense" rupees={300} iconName="arrow-down" color="#427846" bgColor="#84bb86" />
        </View>
    )
}

export default ChipGroup;