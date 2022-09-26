import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import GoogleButton  from "../../components/Button/GoogleButton";
import Button  from "../../components/Button/Button";
import Input from "../../components/Input";
import styles from "./styles";

export default function Login({navigation}) {

    const pigz_logotipo = require("../../../assets/pigz-logotipo.png");

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView style={{paddingHorizontal: 24}}>

                <Image source={pigz_logotipo} style={styles.logo}/>
                <Text style={styles.description}>Para entregadores</Text>

                <Text style={styles.pageTitle}>Login</Text>
                <View>
                    <Input label="Email ou Telefone" placeholder="example@pigz.com.br" />
                    <Input label="Senha" password placeholder="******" />
                </View>
                <Text style={styles.forgetPasswordText}>Esqueci minha senha</Text>

                <Button label={"Entrar"} onPress={() => navigation.navigate('Dashboard')}/>
                <View style={styles.dontHaveAccountContainer}>
                    <Text style={styles.dontHaveAccountText}>Não tem uma Conta? {""}
                        <Text style={styles.textHighlight}>Criar agora!</Text>
                    </Text>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.bottomTitleContainer}>
                        <Text style={styles.bottomTitleText}>Entrar com</Text>
                        <View style={styles.divider}></View>
                    </View>
                    <GoogleButton />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

