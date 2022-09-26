import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import styles from "./styles";

interface Props extends TouchableOpacityProps{
    label?: string
}

export default function RejectButton({ label, ...props }:Props) {
    const rejectIcon = require("../../../../assets/reject.png");
    return (
        <TouchableOpacity {...props} >
            <View style={[styles.container, styles.rejectButton]}>
                <Image source={rejectIcon} style={styles.image} />
                <Text style={[styles.label, { color: "#E8453E" }]}>
                    {label || "Rejeitar"}
                </Text>

            </View>
        </TouchableOpacity>
    );
}