import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 30
    },
    divisor: {
        borderBottomColor: "#707070",
        borderBottomWidth: 2,
        opacity: 0.1
    },
    acceptButton: {
        marginTop: 32
    },
    rejectButton: {
        marginVertical: 15
    },
    topContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 44
    },
    box: {
        alignItems: "center",
    },
    boxLabel: {
        fontFamily: "Poppins_400Regular",
        fontSize: 14,
        color: "#707070"
    },
    boxText: {
        fontFamily: "Poppins_700Bold",
        fontSize: 20,
        color: "#FA641F"
    },
    valueDeliveryContainer: {
        alignItems: "center",
        marginTop: 20
    },
    valueTitle: {
        fontFamily: "Poppins_400Regular",
        fontSize: 14,
        color: "#707070"
    },
    valueMoney: {
        fontFamily: "Poppins_700Bold",
        fontSize: 35,
        color: "#FA641F"
    }
    

});

export default styles;