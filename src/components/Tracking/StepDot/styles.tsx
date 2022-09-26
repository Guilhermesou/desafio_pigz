import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: "flex", 
        flexDirection: "row", 
    },
    fullDot: {
        backgroundColor: "#fc771e", 
        borderRadius: 25, 
        width: 15, 
        height: 15
    },
    outlinedDot: {
        backgroundColor: "#FFFFFF",
        borderWidth: 1, 
        borderColor: "#FA641F", 
        borderRadius: 25, 
        width: 9, 
        height: 9, 
        marginTop: 17
    },
    title: {
        fontFamily: "Poppins_500Medium", 
        fontSize: 18, 
        color: "#FA641F",
        top: -6,  
        marginLeft: 9
    }, 
    description: {
        fontFamily: "Poppins_400Regular",
        fontSize: 14,
        color: "#707070",
        top: -3,
        marginLeft: 9
    }
});

export default styles;