import React, { useContext } from "react";
import { View, Text, KeyboardAvoidingView, TouchableOpacity, Image } from "react-native";
import { styles } from "../../styles/Styles";
import { AuthContext } from "../../contexts/auth";
import Feather from '@expo/vector-icons/Feather';

import Header from "../../components/Header";

export default function Home() {
    const { logOut, authUser } = useContext(AuthContext)

    function handleLogout(){
        logOut()
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Header setor={'Início'}/>
            <View style={styles.contentArea}>

                <View style={styles.userInfoArea}>

                    {authUser.profilePic 
                    ? <Image
                        source={uri(authUser.profilePic)}
                    />
                    :<Feather name="user" size={90} color="black" />}

                    <Text style={[styles.normal, {color: 'black', numberOfLines: 1}]}>Bem-vindo, {authUser.displayName ? authUser.displayName : authUser.email}</Text>

                </View>

                <TouchableOpacity onPress={()=>handleLogout()} style={styles.buttonArea}>
                    <Text style={styles.buttonText}>Sair</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}