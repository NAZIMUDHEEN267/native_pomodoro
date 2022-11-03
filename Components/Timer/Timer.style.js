
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    upperLayer: {
        shadowColor: '#999',
        justifyContent: "center",
        alignItems: "center",
        height: 300,
        width: 300,
        borderRadius: 300 / 2
    },
    grantLayer: {
        justifyContent: "center",
        alignItems: "center",
        height: 300,
        width: 300,
        borderRadius: 300 / 2
    },
    parentLayer: {
        justifyContent: "center",
        alignItems: "center",
        height: 260,
        width: 260,
        backgroundColor: "#11233d",
        borderRadius: 260 / 2
    },
    childLayer: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
    },
    time: {
        color: "#c7cbd1",
        fontSize: 50,
        letterSpacing: 2,
        marginBottom: 10
    },
    switchText: {
        color: "#c7cbd1",
        fontSize: 20,
        textTransform: "uppercase",
        letterSpacing: 2,
    }
})