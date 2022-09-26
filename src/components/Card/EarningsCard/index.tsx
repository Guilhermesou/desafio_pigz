import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

interface Props {
    style?: {}
}

export default function EarningsCard({style}:Props) {

    const [hideEarnings, setHideEarnings] = useState(false);

    return (

        <LinearGradient colors={["#FA641E", "#FF881F"]} start={{ x: 1.0, y: 1.0 }} style={[styles.container, style]}>
            <View style={styles.top}>
                <Text style={styles.topText}>Ganhos do Dia</Text>
                <Text style={styles.topText}>29/07</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.contentText}>
                    {hideEarnings ?
                        "R$ 150"
                    :
                        "----"
                    }
                </Text>
                <TouchableOpacity onPress={() => setHideEarnings(!hideEarnings)}>
                    <Feather name={hideEarnings? "eye": "eye-off"} color={"#FFFFFF"} size={26}/>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

