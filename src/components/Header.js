import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "../styles/Styles";

export default function Header({ setor }) {
    return (
        <View style={styles.cabecalhoArea}>
            <Image
                style={styles.cabecalhoImg}
                source={require('../assets/logoInorte.png')}
            />
            <Text style={styles.titulo}>{setor}</Text>
        </View>
    )
}