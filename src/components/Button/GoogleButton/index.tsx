import { TouchableOpacity, Image, Text } from "react-native";

export default function GoogleButton() {

    const googleIcon = require("../../../../assets/google.png");

    return (
        <TouchableOpacity style={{ marginTop: 24, marginBottom: 90, borderWidth: 1, borderColor: "#9F9F9F", borderRadius: 16, height: 48, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <Image source={googleIcon} style={{ width: 20, height: 20, position: "absolute", left: 16 }} />
            <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 16, color: "#676767" }}>
                Continuar com o Google
            </Text>
        </TouchableOpacity>
    );
}