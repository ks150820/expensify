import { StyleSheet } from "react-native";

export const footerStyle = StyleSheet.create({
    component: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0
    },
    buttonComponent: {
        padding: 5,
        borderRadius: 40/2,
        backgroundColor: "#000",
        alignSelf:"flex-end",
        alignItems: "center",
        marginBottom: 10,
        marginRight: 10,
        elevation: 4,
        height: 40,
        width: 40
    },
    icon: {
        fontSize: 30,
        color: "#fff"    
    },
    savingComponent: {
        backgroundColor: "tomato",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
    text: {
        fontSize: 20,
        color: "#fff"
    }
})