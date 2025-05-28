import React, { useContext } from 'react'
import { View, Text, KeyboardAvoidingView, TextInput } from 'react-native'
import { styles } from '../../../styles/Styles'

import { AnamneseContext } from '../../../contexts/anamneseContext'
import Header from '../../../components/Header'

export default function AnmenseAdolescentes(){
    const { setPaciente, paciente } = useContext(AnamneseContext)



    const formatarData = (texto, callback, key) => {
        let textoFiltrado = texto.replace(/\D/g, '')
        if (textoFiltrado.length >= 5) {
            textoFiltrado = textoFiltrado.substring(0, 2) + '/' + textoFiltrado.substring(2, 4) + '/' + textoFiltrado.substring(4,8)
        } else if (textoFiltrado.length >= 3) {
            textoFiltrado = textoFiltrado.substring(0, 2) + '/' + textoFiltrado.substring(2, 4)
        }
        callback({...paciente, [key]: textoFiltrado})
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
            <Header setor={'Anamnese de adolescentes'}/>
            <View style={styles.contentArea}>

                <View style={styles.inputArea}>
                    <Text style={styles.normal}>Data:</Text>
                    <TextInput 
                        style={styles.input} 
                        onChangeText={texto=>formatarData(texto, setPaciente, 'data')}
                        placeholder='DD/MM/AAAA'
                        value={paciente.data}
                    />
                </View>


            </View>
        </KeyboardAvoidingView>
    )
}