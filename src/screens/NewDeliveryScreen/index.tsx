import { SafeAreaView, View, Text } from "react-native";
import AcceptButton from "../../components/Button/AcceptButton";
import RejectButton from "../../components/Button/RejectButton";
import Tracking from "../../components/Tracking";
import styles from "./styles";

export default function NewDeliveryScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.box}>
                    <Text style={styles.boxLabel}>Tempo Estimado</Text>
                    <Text style={styles.boxText}>30 Min</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.boxLabel}>Número de ID</Text>
                    <Text style={styles.boxText}>#6789</Text>
                </View>
            </View>
            <View style={styles.divisor}/>
            <View style={styles.valueDeliveryContainer}>
                <Text style={styles.valueTitle}>Valor da entrega</Text>
                <Text style={styles.valueMoney}>R$ 13,75</Text>
            </View>
            <Tracking address={{ origin: "Restaurante Recanto da Peixada\nDistancia: 2km", destiny: "Av: Cabo dos Soldados - Caranã\nDistancia: 6km" }} />
            <View>
                <AcceptButton style={styles.acceptButton} />
                <RejectButton style={styles.rejectButton} />
            </View>
        </SafeAreaView>
    );

}
