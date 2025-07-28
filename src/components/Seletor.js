import React from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { styles, colors } from "../styles/Styles";

export default function Seletor({selecionado, aoMudar, lista}) {
    
    return (
            <View style={styles.pickerContainer}>
                <Picker
                    style={{height: 60, backgroundColor: colors.secondary, width: '100%'}}
                    selectedValue={selecionado}
                    onValueChange={aoMudar}
                    mode='dialog'
                >
                    {lista.map((item, index) => {
                        return <Picker.Item key={index} value={item.value} label={item.label} />
                    })}
                </Picker>
            </View>
    )
}