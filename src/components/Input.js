import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from '../styles/Styles'

export default function Input( {valor, titulo, callback, legenda, kt} ){
    return (
        <>
            <View style={{margin: 0, borderWidth: 1}}>
                {titulo && <Text style={styles.normal}>{titulo}</Text>}
                <TextInput
                    value={valor}
                    onChangeText={callback}
                    style={styles.input}
                    placeholder={legenda}
                    keyboardType={kt}
                />
            </View>
        </>
    )
}