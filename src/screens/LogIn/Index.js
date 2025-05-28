import React, { useState, useContext } from "react";
import { View, Image, TextInput, TouchableOpacity, Text, KeyboardAvoidingView } from "react-native";
import { styles } from "../../styles/Styles";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

export default function LogIn() {
    const { signIn } = useContext(AuthContext)
    const navigation = useNavigation()

    function handleLogin() {
        signIn()
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
            <View style={styles.inputArea}>
                <TextInput 
                    style={styles.input}
                    placeholder='Usuário'
                    placeholderTextColor={styles.input.color}
                />
            </View>

            <View style={styles.inputArea}>
                <TextInput 
                    style={styles.input}
                    placeholder='Senha'
                    placeholderTextColor={styles.input.color}
                />
            </View>

            <TouchableOpacity
                style={styles.buttonArea}
                activeOpacity={0.6}
                onPress={() => handleLogin()}
            >
                <Text style={styles.buttonText}>Log In</Text>
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