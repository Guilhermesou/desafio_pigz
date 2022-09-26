import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontFamily: "Poppins_500Medium",
        color: "#FFFFFF"
    },
    container: {
        height: 48,
        borderRadius: 16,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: 24,
        height: 24,
        marginRight: 6
    },
    qrcodeImage: {
        width: 21.89,
        height: 21.89,
        marginRight: 6
    },

    cancelButton: {
        backgroundColor: "#FFFFFF",
        borderColor: "#E8453E",
        borderWidth: 1
    },
    blackLabel: {
        color: "#E8453E"
    }

    
});

export default styles;