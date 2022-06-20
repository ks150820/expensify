import React from "react";
import { View, Text, Image } from "react-native";

import { headerStyle } from "../Styles/home-screen-header-style"

type Props = {
    name: string
}

const Header: React.FC<Props> = ({ name }) => {
    return (
        <View style={headerStyle?.component}>
            <View>
                <Text style={headerStyle.text}>Good Morning</Text>
                <Text style={[headerStyle.text, headerStyle.name]}>{name}</Text>
            </View>
            <View>
                <Image source={require("../../../assets/images/avatar.png")} style={headerStyle.image} resizeMode="cover" />
            </View>
        </View>
    );
}

export default Header;