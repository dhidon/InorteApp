import React, { useContext, useState } from "react";
import { View, Image, TouchableOpacity, Text, KeyboardAvoidingView, ActivityIndicator } from "react-native";
import { styles } from "../../styles/Styles";
import { AuthContext } from "../../contexts/auth";

import Input from '../../components/Input'


export default function LogIn() {
    const { signIn, registerUser } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [login, setLogin] = useState(true)
    const [nome, setNome] = useState('')
    const [confirmacao, setConfirmacao] = useState('')

    function handleLogin() {
        signIn(email, senha)
    }

    function handleRegister(){
        if(senha === confirmacao) {
            registerUser(email, senha, nome)
            setLogin(true)
            alert('Novo usuário cadastrado!')
        } else {
            alert('As senhas devem ser iguais')
        }
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
            
            <View style={[styles.inputArea, {gap: 15}]}>
                {login === false &&
                <Input
                    legenda='Seu nome'
                    valor={nome}
                    callback={t => setNome(t)}
                />}
                <Input
                    legenda='Seu email'
                    valor={email}
                    callback={t => setEmail(t)}
                />
                <Input
                    legenda='Sua senha'
                    valor={senha}
                    callback={t => setSenha(t)}
                    st={true}
                />
                {login === false &&
                <Input
                    legenda='Confirme a senha'
                    valor={confirmacao}
                    callback={t => setConfirmacao(t)}
                    st={true}
                />}
                
            </View>

            {
                login
                ?<TouchableOpacity
                style={styles.buttonArea}
                activeOpacity={0.6}
                onPress={() => handleLogin()}
                >
                    <Text style={styles.buttonText}>Entrar</Text>
                    
                </TouchableOpacity>
                :<TouchableOpacity
                style={styles.buttonArea}
                activeOpacity={0.6}
                onPress={() => handleRegister()}
                >
                    <Text style={styles.buttonText}>Cadastrar</Text>
                    
                </TouchableOpacity>
            }

            
            <TouchableOpacity 
            style={styles.linkArea}
            onPress={() => setLogin(!login)}
            >
                <Text style={styles.link}>{login ? `Criar novo usuário` : `Já tenho uma conta` }</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}