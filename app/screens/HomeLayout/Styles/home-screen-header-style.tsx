import { StyleSheet } from "react-native";

export const headerStyle = StyleSheet.create({
    component: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    text: {
        color: "#000"
    },
    name: {
        fontSize: 25
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 80/2
    }
})