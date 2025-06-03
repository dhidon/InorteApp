import React from "react";
import { View, Dimensions, Platform, KeyboardAvoidingView, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { styles } from "../styles/Styles";

export default function Seletor({selecionado, aoMudar, lista}) {
    const larguraTela = Dimensions.get('window').width
    const ehDesktop = larguraTela > 1024 && Platform.OS === 'web'
    
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.pickerContainer}>
                <Picker
                    style={ehDesktop?styles.desktopPicker:styles.mobilePicker}
                    selectedValue={selecionado}
                    onValueChange={aoMudar}
                    mode='dialog'
                >
                    {lista.map((item, index) => {
                        return <Picker.Item key={index} value={item.value} label={item.label} />
                    })}
                </Picker>
            </View>
        </KeyboardAvoidingView>
    )
}