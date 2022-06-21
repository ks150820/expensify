import React, { useState, useEffect } from "react";
import { View, Pressable, Text } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { footerStyle } from "../Styles/Footer-style";

type Props = {
    onPress: any, //dont write any
    income: number,
    expense: number
}
const Footer: React.FC<Props> = ({ onPress, income, expense }) => {
    const [totalSaving, setTotalSaving] = useState(0);

    useEffect(() => {
        const savingAmount = income - expense;
        setTotalSaving(savingAmount);
    }, [income, expense])
    return (
        <View style={footerStyle?.component}>

            <Pressable onPress={onPress}>
                <View style={footerStyle?.buttonComponent}>
                    <Icon name="add" style={footerStyle?.icon} />
                </View>
            </Pressable>
            <View style={totalSaving < 0 ? [footerStyle?.errorComponent, footerStyle?.commonSavingComponent] : [footerStyle?.savingComponent, footerStyle?.commonSavingComponent]}>
                <Text style={footerStyle?.text}>Saving</Text>
                <Text style={footerStyle?.text}>₹ {totalSaving}</Text>
            </View>
        </View>
    )
}

export default Footer;