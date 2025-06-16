import React from "react";
import { View, KeyboardAvoidingView, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { styles } from "../styles/Styles";

export default function Seletor({selecionado, aoMudar, lista}) {
    
    return (
        <KeyboardAvoidingView style={[styles.container, {marginBottom: 5}]}>
            <View style={styles.pickerContainer}>
                <Picker
                    style={{height: 60}}
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