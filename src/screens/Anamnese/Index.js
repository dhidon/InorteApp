import React, { useContext } from "react";
import { View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { styles } from '../../styles/Styles'
import { useNavigation } from "@react-navigation/native";
import { AnamneseContext } from "../../contexts/anamneseContext";

export default function Anamnese() {
    const navigation = useNavigation()
    const {paciente, setPaciente} = useContext(AnamneseContext)

    function gotoAdolescentes(){
        setPaciente({...paciente, grupo: 'adolescente'})
        navigation.navigate('Registro')
    }

    function gotoCriancas(){
        setPaciente({...paciente, grupo: 'criança'})
        navigation.navigate('Registro')
    }

    return (
        <KeyboardAvoidingView style={styles.container}>

            <View style={[styles.contentArea, {gap: 20}]}>

                <Text style={[styles.normal, {color: "#000"}]}>Qual o público alvo da anamnese?</Text>

                <View style={{flexDirection: 'row', gap: 30}}>
                    <TouchableOpacity 
                    style={[styles.buttonArea, {height: 200, width: 200, borderRadius: 8}]} 
                    onPress={gotoCriancas}
                    activeOpacity={0.6}
                    >
                        <Text style={styles.buttonText}>Crianças</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                    style={[styles.buttonArea, {height: 200, width: 200, borderRadius: 8}]} 
                    onPress={gotoAdolescentes}
                    activeOpacity={0.6}
                    >
                        <Text style={styles.buttonText}>Adolescentes</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </KeyboardAvoidingView>
    )
}