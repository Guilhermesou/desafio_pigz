import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Image, Text } from "react-native";
import StepDot from "./StepDot";
import styles from "./styles";


interface TrackingProps {
    address: {
        origin: string,
        destiny: string
    }
}



export default function Tracking({ address }: TrackingProps) {

    const delivery_image = require("../../../assets/delivery.png");

    return (
        <View style={styles.container}>
            <LinearGradient colors={["#FA641E", "#FF881F"]} start={{ x: 1.0, y: 1.0 }} style={styles.content}>
                <View style={styles.badgeStatus}>
                    <Image source={delivery_image} style={styles.deliveryImage} />
                    <View style={styles.badgeTextContainer}>
                        <Text style={styles.badgeTitle}>Entrega</Text>
                        <Text style={styles.badgeSubTitle}>Percurso Total: 8km</Text>
                    </View>
                </View>
                <View style={styles.stepsContainer}>
                    <View style={styles.verticalLine}/>
                    <View style={styles.stepsDotsContainer}>
                        <StepDot label="Coleta" description={address.origin} style={styles.stepDot}/>
                        <StepDot label="Entrega" description={address.destiny} style={styles.stepDot}/>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}

