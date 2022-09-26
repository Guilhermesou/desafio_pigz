import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";

interface Props extends TouchableOpacityProps{
    label?: string,
    gradiant?: boolean
}

export default function Button({ label, gradiant,...props }:Props) {

    return (
        <TouchableOpacity {...props} >
            <LinearGradient colors={gradiant? ["#FA641E", "#FF881F"]:["#FF671F","#FF671F"]} start={{ x: 1.0, y: 1.0 }} style={styles.container}>
                <Text style={styles.label}>
                    {label}
                </Text>
            </LinearGradient>

        </TouchableOpacity>
    );
}








