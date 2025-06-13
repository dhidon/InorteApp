import React, { useContext } from "react";
import { View, Text, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { styles } from "../../styles/Styles";
import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";

export default function Home() {
    const { logOut, authUser } = useContext(AuthContext)

    function handleLogout(){
        logOut()
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Header setor={'Home'}/>
            <View style={styles.contentArea}>
                <Text style={styles.normal}>Bem-vindo, {authUser?.email}</Text>

                <TouchableOpacity onPress={()=>handleLogout()} style={styles.buttonArea}>
                    <Text style={styles.buttonText}>Sair</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}