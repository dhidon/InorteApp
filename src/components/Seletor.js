import React from 'react'
import { KeyboardAvoidingView, Text } from 'react-native'
import { styles } from '../styles/Styles'
import { Picker } from '@react-native-picker/picker'

export default function Seletor() {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Picker>

            </Picker>
            <Text>Acima está um seletor</Text>
        </KeyboardAvoidingView>
    )
}