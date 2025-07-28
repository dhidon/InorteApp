import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from '../styles/Styles'

export default function Input( {valor, titulo, callback, legenda, kt, st} ){
    return (
        <>
            <View style={{margin: 0}}>
                {titulo && <Text style={styles.normal}>{titulo}</Text>}
                <TextInput
                    value={valor}
                    onChangeText={callback}
                    style={styles.input}
                    placeholder={legenda}
                    keyboardType={kt}
                    secureTextEntry={st}
                    placeholderTextColor={"#c7c7c7"}
                />
            </View>
        </>
    )
}