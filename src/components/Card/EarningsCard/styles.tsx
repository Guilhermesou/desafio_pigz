import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        height: 117,
        marginHorizontal: 30,
    },
    top: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 11
    },
    topText: {
        fontFamily: "Poppins_500Medium",
        fontSize: 16,
        color: "#FFFFFF"
    },
    content: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 25,
        marginRight: 19,
        marginBottom: 20
    },
    contentText: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 30,
        color: "#FFFFFF"
    },
    eyeIcon: {
        width: 27,
        height: 19
    }
});

export default styles;