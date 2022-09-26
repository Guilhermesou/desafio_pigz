import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: "#FFFFFF",
        
    },
    content: {
        paddingTop: 44,
        paddingBottom: 60
        
    },
    card: {
        marginBottom: 10
    },
    cardContent: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",        
        marginHorizontal: 2
    },
    countCard: {
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#F0F0F0",
        width: "30%",
        height: 97,
        alignItems: "center",
        paddingVertical: 9,
        marginTop: 18,
        marginLeft: 6,
        marginBottom: 20
    },
    countCardTitle: {
        color: "#9F9F9F",
        fontFamily: "Poppins_400Regular",
        fontSize: 11
    },
    countCardText: {
        color: "#333333",
        fontFamily: "Poppins_500Medium",
        fontSize: 40
    },
    okButton: {
        marginLeft: 12,
        width: "22%"
    }
});

export default styles;