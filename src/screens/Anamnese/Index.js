import React, { useContext } from "react";
import { View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { styles } from '../../styles/Styles'
import { useNavigation } from "@react-navigation/native";
import { AnamneseContext } from "../../contexts/anamneseContext";

import Header from "../../components/Header";

export default function Anamnese() {
    const navigation = useNavigation()
    const {paciente, setPaciente} = useContext(AnamneseContext)

    function gotoAdolescentes(){
        setPaciente({...paciente, grupo: 'adolescente'})
        navigation.navigate('Anamnese de Adolescentes')
    }

    function gotoCriancas(){
        setPaciente({...paciente, grupo: 'criança'})
        navigation.navigate('Anamnese de Crianças')
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Header setor={'Anamnese'}/>
            <View style={[styles.contentArea]}>

                <Text style={styles.normal}>Qual o público alvo da anamnese?</Text>

                <TouchableOpacity style={styles.buttonArea} onPress={gotoCriancas}>
                    <Text style={styles.buttonText}>Crianças</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.buttonArea} onPress={gotoAdolescentes}>
                    <Text style={styles.buttonText}>Adolescentes</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    )
}