import React, { useContext, useState } from "react";
import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput } from "react-native";
import { styles } from "../../styles/Styles";
import { AuthContext } from "../../contexts/auth";

export default function SignUp() {
    const { registerUser } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    function handleRegister(){
        registerUser(email, senha)
    }

    return (
        <KeyboardAvoidingView
            behavior={'padding'}
            style={styles.loginContainer}
        >
            <View style={styles.inputArea}>
                <TextInput 
                    style={styles.input}
                    placeholder='email'
                    placeholderTextColor={styles.input.color}
                    onChangeText={newText=>setEmail(newText)}
                />
            </View>

            <View style={styles.inputArea}>
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
                onPress={() => handleRegister()}
            >
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}