import React, { useContext} from 'react'
import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native'
import { styles } from '../../../styles/Styles'

import { AnamneseContext } from '../../../contexts/anamneseContext'

import Header from '../../../components/Header'
import DateInput from '../../../components/DateInput'
import Identificacao from '../../../components/Identificacao'
import Sintomas from '../../../components/Sintomas'

export default function AnamneseCriancas(){
    const {paciente, setPaciente} = useContext(AnamneseContext)

    return (
        <KeyboardAvoidingView style={styles.container} behavior={'height'}>
            <ScrollView>
                <View style={styles.contentArea}>
                    <Header setor='Anamnese de crianças'/>
                    
                    <DateInput/>

                    <Identificacao/>

                    <Sintomas/>

                    <Text>3. Histórico de desenvolvimento</Text>

                    <View style={styles.inputArea}>

                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}