import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "./styles";

interface Props extends TouchableOpacityProps {
    label?: string
}

export default function ScanQrCodeButton({ label, ...props }:Props) {

    return (
        <TouchableOpacity {...props}>
            <LinearGradient colors={["#FA641E", "#FF881F"]} start={{ x: 1.0, y: 1.0 }} style={styles.container}>

                <MaterialIcons name="qr-code-scanner" color={"#FFFFFF"} size={21.8}/>
                <Text style={styles.label}>
                    {label}
                </Text>
            </LinearGradient>

        </TouchableOpacity>
    );
}