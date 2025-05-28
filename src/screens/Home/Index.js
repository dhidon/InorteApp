import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { styles } from "../../styles/Styles";

import Header from "../../components/Header";

export default function Home() {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Header setor={'Home'}/>
            <View style={styles.contentArea}>
                <Text style={styles.normal}>Esta é a sua home, parabéns!</Text>
            </View>
        </KeyboardAvoidingView>
    )
}