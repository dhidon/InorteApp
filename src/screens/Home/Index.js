import React, { useContext } from "react";
import { View, Text, KeyboardAvoidingView, TouchableOpacity, Image } from "react-native";
import { styles } from "../../styles/Styles";
import { AuthContext } from "../../contexts/auth";
import Feather from '@expo/vector-icons/Feather';

import Header from "../../components/Header";

export default function Home() {
    const { logOut, user } = useContext(AuthContext)

    function handleLogout(){
        logOut()
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Header setor={'Início'}/>
            <View style={styles.contentArea}>

                <View style={styles.userInfoArea}>

                    {user.photoURL 
                    ? <Image
                        source={uri(user.photoURL)}
                    />
                    :<Feather name="user" size={90} color="black" />}

                    <Text style={[styles.normal, {color: 'black', numberOfLines: 1}]}>Bem-vindo, {user.displayName ? user.displayName : user.email}</Text>

                </View>

                <TouchableOpacity onPress={()=>handleLogout()} style={styles.buttonArea}>
                    <Text style={styles.buttonText}>Sair</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}