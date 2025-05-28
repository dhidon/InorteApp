import React from "react";
import { View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { styles } from '../../styles/Styles'
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";

export default function Anamnese() {
    const navigation = useNavigation()

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Header setor={'Anamnese'}/>
            <View style={styles.contentArea}>
                <Text style={styles.normal}>Qual o público alvo da anamnese?</Text>

                <TouchableOpacity style={styles.buttonArea} onPress={()=>{navigation.navigate('Anamnese de Crianças')}}>
                    <Text style={styles.buttonText}>Crianças</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.buttonArea} onPress={()=>{navigation.navigate('Anamnese de Adolescentes')}}>
                    <Text style={styles.buttonText}>Adolescentes</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    )
}