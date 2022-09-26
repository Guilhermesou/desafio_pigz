import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 35,

    },
    content: {
        height: 50,
        borderRadius: 16,
    },
    badgeStatus: {

        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    deliveryImage: {
        width: 24,
        height: 24,
        marginLeft: 20
    },
    badgeTextContainer: {
        flex: 1,
        marginLeft: 12,
        justifyContent: "space-around"
    },
    badgeTitle: {
        fontFamily: "Poppins_500Medium",
        fontSize: 18,
        color: "#FFFFFF"
    },
    badgeSubTitle: {
        fontFamily: "Poppins_400Regular",
        fontSize: 12,
        color: "#FFFFFF"
    },
    stepsContainer: {
        marginLeft: 33,
        
    },
    verticalLine: {
        borderLeftWidth: 1,
        borderLeftColor: "#BABABA",
        height: 160,

    },
    stepsDotsContainer: {
        position: "absolute",
        top: 34
    },
    stepDot: {
        left: -7,
        marginBottom: 20
    },
    


});

export default styles;