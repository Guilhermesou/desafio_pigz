import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: "100%",
        backgroundColor: "#FFFFFF"
    },
    logo: {
        width: 100,
        height: 50,
        marginTop: 93,
        alignSelf: "center"
    },
    description: {
        fontSize: 18,
        fontFamily: "Poppins_600SemiBold",
        alignSelf: "center"
    },
    pageTitle: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 16,
        marginTop: 37,
    },
    input: {

    },
    forgetPasswordText: {
        marginVertical: 24,
        fontFamily: "Poppins_400Regular",
        fontSize: 13,
        color: "#676767",
        textDecorationLine: "underline"
    },
    dontHaveAccountContainer: {
        marginTop: 36,
        alignItems: "center"
    },
    dontHaveAccountText: {
        fontFamily: "Poppins_400Regular",
        fontSize: 13,
        color: "#676767"
    },
    textHighlight: {
        color: "#FA641E"
    },
    bottom: {
        marginTop: 97,

    },
    bottomTitleContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    bottomTitleText: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 13,
        color: "#333333",
        paddingRight: 8,
    },
    divider: {
        borderBottomWidth: 2,
        borderColor: "#707070",
        width: "100%"
    },
    

});

export default styles;