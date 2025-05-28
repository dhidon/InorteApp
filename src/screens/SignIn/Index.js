import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { styles } from "../../styles/Styles";

export default function SignIn() {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.text}>Essa é uma página de sign in</Text>
        </KeyboardAvoidingView>
    )
}