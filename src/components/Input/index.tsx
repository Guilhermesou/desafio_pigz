import { View, Text, TextInput, StyleSheet, TextInputAndroidProps, TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

interface InputProps extends TextInputProps {
    label?: string,
    password?: boolean,
}

export default function Input({ label, password, ...props }: InputProps) {
    const [hidePassword, setHidePassword] = useState(password);

    return (
        <View style={{ flex: 1 }}>
            {label &&
                <Text style={styles.label}>{label}</Text>
            }
            <View style={styles.inputContainer}>
                <TextInput secureTextEntry={hidePassword} style={styles.input}  {...props}></TextInput>
                {password &&
                    <Feather name={hidePassword ? "eye" : "eye-off"} style={styles.hideShowIcon} onPress={() => setHidePassword(!hidePassword)} />
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        fontFamily: "Poppins_400Regular",
        fontSize: 13,
        //marginTop: 16,
        marginBottom: 6,
        color: "#4b4b4b"
    },
    inputContainer: {
        display: "flex",
        borderWidth: 1,
        borderColor: "#FA641E",
        borderRadius: 16,
        flexDirection: "row",
        alignItems: "center",
        height: 50
    },
    input: {
        fontFamily: "Poppins_400Regular",
        fontSize: 14,
        color: "#4B4B4B",
        paddingLeft: 16,
        width: "88%"
    },
    hideShowIcon: {
        color: "#FF671F",
        fontSize: 24
    }
});