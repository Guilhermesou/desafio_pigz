import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    card: {
        marginTop: 32,
        backgroundColor: "#FFFFFF",
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowColor: "#000029",
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 4,
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginHorizontal: 30,
        marginBottom: 20
    },
    cardTitle: {
        fontFamily: "Poppins_700Bold",
        fontSize: 16,
        color: "#333333",
        marginBottom: 8
    },
    cardSubTitle: {
        color: "#707070",
        fontFamily: "Poppins_400Regular",
        fontSize: 12,
        marginBottom: 10
    },
});

export default styles;