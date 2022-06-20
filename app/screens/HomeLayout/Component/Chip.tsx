import React from "react";
import {View, Text} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"

import {chipStyles} from "../Styles/chip-style";

type Props = {
    title: string;
    rupees: number;
    iconName: string,
    color: string,
    bgColor: string
}

const Chip: React.FC<Props> = ({title,rupees,iconName,color,bgColor}) => {
    return (
        <View style={{...chipStyles?.component, backgroundColor: color}}>
            <View  style={{...chipStyles?.iconComponent, backgroundColor: bgColor}}>
                <Icon name={iconName} style={chipStyles?.icon} />
            </View>
            <View>
                <Text style={chipStyles.text}>{title}</Text>
                <Text style={chipStyles.text}>₹ {rupees}</Text>
            </View>
        </View>
    )
}

export default Chip;