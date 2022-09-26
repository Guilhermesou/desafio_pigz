import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, Image, Text, TouchableOpacityProps } from "react-native";
import styles from "./styles";

interface Props extends TouchableOpacityProps {
    label?: string
}

export default function AcceptButton({ label, ...props }:Props) {
    const acceptIcon = require("../../../../assets/accept.png");
    return (
        <TouchableOpacity {...props}>
            <LinearGradient colors={["#FA641E", "#FF881F"]} start={{ x: 1.0, y: 1.0 }} style={styles.container}>
                <Image source={acceptIcon} style={styles.image} />
                <Text style={styles.label}>
                    {label || "Aceitar"}
                </Text>

            </LinearGradient>
        </TouchableOpacity>
    );
}