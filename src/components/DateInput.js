import React, {useContext, UseContext} from 'react'
import { View, Text, TextInput } from 'react-native'
import { AnamneseContext } from '../contexts/anamneseContext'
import { styles } from '../styles/Styles'

export default function DateInput(){
    const {paciente, setPaciente, formatarData} = useContext(AnamneseContext)

    return(
        <>
            <View style={styles.inputArea}>
                <Text style={styles.normal}>Data:</Text>
                <TextInput 
                    style={styles.input} 
                    onChangeText={texto=>formatarData(texto, setPaciente, 'data')}
                    placeholder='DD/MM/AAAA'
                    value={paciente.data}
                    keyboardType='numeric'
                />
            </View>
        </>
    )
}