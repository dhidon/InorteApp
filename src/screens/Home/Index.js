import React, { useContext } from "react";
import { View, Text, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { styles } from "../../styles/Styles";
import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";

export default function Home() {
    const { setSigned } = useContext(AuthContext)

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Header setor={'Home'}/>
            <View style={styles.contentArea}>
                <Text style={styles.normal}>Esta é a sua home, parabéns!</Text>

                <TouchableOpacity onPress={()=>{setSigned(false)}} style={styles.buttonArea}>
                    <Text style={styles.buttonText}>LogOut</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}