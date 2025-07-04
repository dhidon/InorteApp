import React, { useContext, useState } from "react";
import { View, Image, TextInput, TouchableOpacity, Text, KeyboardAvoidingView } from "react-native";
import { styles } from "../../styles/Styles";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

export default function LogIn() {
    const { signIn } = useContext(AuthContext)
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function handleLogin() {
        signIn(email, senha)
    }

    return (
        <KeyboardAvoidingView
            behavior={'padding'}
            style={styles.loginContainer}
        >
            <Image
                style={styles.logo}
                source={require('../../assets/logo-card.png')}
            />
            <Text style={styles.titulo}>Fazer Login</Text>
            <View style={[styles.inputArea, {gap: 15}]}>
                <TextInput 
                    style={styles.input}
                    placeholder='Seu email'
                    placeholderTextColor={styles.input.color}
                    onChangeText={newText=>setEmail(newText)}
                />
                <TextInput 
                    style={styles.input}
                    placeholder='Senha'
                    placeholderTextColor={styles.input.color}
                    onChangeText={newText=>setSenha(newText)}
                    secureTextEntry
                />
            </View>

            <TouchableOpacity
                style={styles.buttonArea}
                activeOpacity={0.6}
                onPress={() => handleLogin()}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.linkArea}
                onPress={() => navigation.navigate('SignIn')}
            >
                <Text style={styles.link}>Criar novo usuário</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}