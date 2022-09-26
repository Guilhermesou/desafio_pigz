import { View, Text } from "react-native";
import styles from "./styles";
interface Props {
    label: "Coleta" | "Entrega",
    description: string,
    style?: {}
}

export default function StepDot({ label, description, style }: Props) {
    return (
        <View style={[styles.container, style]}>
            <View style={{ alignItems: "center" }}>
                <View style={styles.fullDot} />
                <View style={styles.outlinedDot} />
            </View>
            <View style={{}}>
                <Text style={styles.title}>{label}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
}