import React from "react";
import { View, Pressable, Text } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { footerStyle } from "../Styles/Footer-style";
import useHomeScreenViewController from "../home-screen-view-model";
import { HomeProps } from "../../../Navigation/@types/navigation-types";

type Props = {
    onPress: any
}
const Footer: React.FC<Props> = ({ onPress}) => {
    return (
        <View style={footerStyle?.component}>

            <Pressable onPress={onPress}>
                <View style={footerStyle?.buttonComponent}>
                    <Icon name="add" style={footerStyle?.icon} />
                </View>
            </Pressable>
            <View style={footerStyle?.savingComponent}>
                <Text style={footerStyle?.text}>Saving</Text>
                <Text style={footerStyle?.text}>₹ 300</Text>
            </View>
        </View>
    )
}

export default Footer;