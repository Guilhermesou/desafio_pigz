import { SafeAreaView, ScrollView, Text, View } from "react-native";

import Button from "../../components/Button/Button";
import ScanQrCodeButton from "../../components/Button/ScanQrCodeButton";
import Card from "../../components/Card/Card";
import EarningsCard from "../../components/Card/EarningsCard";
import Input from "../../components/Input";
import styles from "./styles";

export default function Dashboard({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.content}>
                <EarningsCard/>
                <Card title={"Resumo das entregas"} style={styles.card}>
                    <View style={styles.cardContent}>
                        <View style={styles.countCard}>
                            <Text style={styles.countCardTitle}>Aceitas</Text>
                            <Text style={styles.countCardText}>15</Text>
                        </View>
                        <View style={styles.countCard}>
                            <Text style={styles.countCardTitle}>Rejeitadas</Text>
                            <Text style={styles.countCardText}>5</Text>
                        </View>
                        <View style={styles.countCard}>
                            <Text style={styles.countCardTitle}>Total</Text>
                            <Text style={styles.countCardText}>20</Text>
                        </View>

                    </View>

                </Card>
                <Card title={"Iniciar Nova Entrega"} subTitle={"Número de Identificação"}>

                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Input />
                        <Button label="OK" style={styles.okButton} onPress={() => navigation.navigate("NewDelivery")} />
                    </View>
                    <ScanQrCodeButton label="Escanear Qrcode" style={{ marginTop: 18 }} />

                </Card>

            </ScrollView>
        </SafeAreaView>
    );
}

